import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteHierarcy, updateHierarcy } from "../utils/network";
import { setMsg } from "../utils/rawDataReducer";
import { toast, Toaster } from "react-hot-toast";

function UpdateEmployePage (){
    const {data}  = useSelector((state:any)=>state.rawData);
    const [currentName, setCurrentName] = useState("");
    const [currentDescription, setCurrenDescription] = useState("");
    const [currentId, setCurrentId] = useState("");
    const [currentParentId, setCurrentParentId] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleForm =async (event:any)=>{
        event?.preventDefault();
        const res = await updateHierarcy(params.id,{"id":currentId,"name":currentName,"description":currentDescription,"parentId":currentParentId})
        if(res){
            dispatch(setMsg("Updated Sucess Fully"))
            navigate("/")
        }
    }

    const handeleDeleteHierarchy = async() =>{
        let child = data.filter((e:any)=>e[1].parentId == currentId);

        if(currentId == "0"){
            toast.error("You can't Delete CEO")
        }

        else if(child.length !== 0){
            toast.error("Please before Delete child hierarchys")
        }
        else{
            let res = await deleteHierarcy(params.id);
            if(res){
                dispatch(setMsg("Deleted Success-fully"));
                navigate("/");
            }
        }
    }

    useEffect(()=>{

        const currentData = data.filter((e:any)=> e[0]=== params.id);
        setCurrentName(currentData[0][1].name);
        setCurrenDescription(currentData[0][1].description);
        setCurrentParentId(currentData[0][1].parentId);
        setCurrentId(currentData[0][1].id);
    },[])
    return <div>
        <Toaster/>
        <h1 className='font-bold text-xl text-slate-600	text-center'>UpdateEmployee Hierarchy</h1>

        <form className='w-56 m-auto' onSubmit={handleForm}>
            <input type="hidden" value={currentId}/>
            <input className='w-full px-5 py-2 my-5 border-2 rounded border-gray-500' onChange={(e:any)=>setCurrentName(e.target.value)}  value={currentName} type="text" placeholder="name" required/><br/>
            <input className='w-full px-5 py-2 mb-5 border-2 rounded border-gray-500' onChange={(e:any)=>setCurrenDescription(e.target.value)}   value={currentDescription} type="name" placeholder="description" required/><br/>
                <p>Select parent</p>
            <select className='w-full border-2 rounded border-gray-500' onChange={(e:any)=>setCurrentParentId(e.target.value)}  value={currentParentId}>
                {data.map((e:any)=>{
                    return <option value={e[1].id}>{e[1].name}</option>
                })}
               
            </select>
            <br/>
            <input className='w-full my-5' type="submit" value="Update"/>
        </form>

        <p className="w-56 m-auto text-red-400 hover:cursor-pointer" onClick={handeleDeleteHierarchy}>Delete</p>
    </div>
}

export default UpdateEmployePage;