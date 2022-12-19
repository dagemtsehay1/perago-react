import { useSelector } from "react-redux";
import { CustomButton } from "./CustomButton";

function EmployeeHierarchy(){
    const { data } = useSelector((state: any) => state.rawData);
    const parentData = data.filter((e:any)=>{
        return e[1]["parentId"] == "null";
    })

    return <div>

        
        {parentData.map((e:any)=>{
            return <CustomButton id={e[1]["id"]} name={e[1]["name"]} child={data.filter((k:any)=>k[1]["parentId"] ==e[1]["id"])}/>
        })}
                
                
    </div>
}

export default EmployeeHierarchy;