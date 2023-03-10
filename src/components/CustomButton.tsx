import { Button, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function CustomButton(props:any) {
  const { data } = useSelector((state: any) => state.rawData);
  const navigate = useNavigate();
  return (
    <div  className="overflow-hidden mt-2">
      <div>
      <input id={"list"+props.id} type="checkbox" className="peer hidden" />
        <Group noWrap spacing={0}>
          <Button className="bg-slate-400 hover:bg-stone-800 w-3/4" onClick={()=>navigate("update/"+props.orignId)}>{props.name}</Button>

          {props.child.length !=0 && <label htmlFor={"list"+props.id}>
            <div className="bg-slate-400 hover:bg-stone-800 m-2 p-2 rounded text-white">
              <IconChevronDown size={16} stroke={1.5} />
            </div>
          </label>}
          
        </Group>
      <div className="max-h-0 peer-checked:max-h-screen">
      {props.child.length !=0 && props.child.map((e:any)=>{
        return <div className="ml-5">
          <CustomButton orignId={e[0]} id={e[1]["id"]} name={e[1]["name"]} child={data.filter((k:any)=>k[1]["parentId"] ==e[1]["id"])}/>
        </div>
      })}
      </div>
      </div>

    </div>
  );
}
