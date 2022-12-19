import { useSelector } from "react-redux";
import { CustomButton } from "./CustomButton";

function EmployeeHierarchy(){
    const { data } = useSelector((state: any) => state.rawData);
    const parentData = data.filter((e:any)=>{
        return e["parentId"] == null;
    })

    return <div>

        {parentData.map((e:any)=>{
            return <CustomButton id={e["id"]} name={e["name"]} child={data.filter((k:any)=>k["parentId"] ==e["id"])}/>
        })}
                
                
    </div>
}

export default EmployeeHierarchy;