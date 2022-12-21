import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useSelector } from 'react-redux';
import { addHierarchy } from '../utils/network';

function AddEmployePage (){
    const {register, handleSubmit}  =useForm();
    const {data}  = useSelector((state:any)=>state.rawData);
    const [isAdded, setIsAdded] = useState(false);

    const handleForm = async (d:any) => {
        d["id"] = parseInt(data[data.length-1][1].id) + 1;
        const res = await addHierarchy(d);
        if(res){
            setIsAdded(true);
        }
    }

    useEffect(()=>{
        console.log(data);
    },[])
    return <div className='text-center w-full'>
        <h1 className='font-bold text-xl text-slate-600	'>Add New Employee Hierarchy</h1>
        {isAdded && <p className='bg-emerald-400 w-60 m-auto p-5 rounded'>Hierarchy added success full</p>}
        <form className='w-56 m-auto' onSubmit={handleSubmit(handleForm)}>
            <input className='w-full px-5 py-2 my-5 border-2 rounded border-gray-500' {...register("name", {required: true})} type="text" placeholder="name"/><br/>
            <input className='w-full px-5 py-2 mb-5 border-2 rounded border-gray-500' {...register("description", {required: true})} type="name" placeholder="description"/><br/>
                <p>Select parent</p>
            <select className='w-full border-2 rounded border-gray-500' {...register("parentId", {required:true})}>
                {data.map((e:any)=>{
                    return <option value={e[1].id}>{e[1].name}</option>
                })}
               
            </select>
            <br/>
            <input className='w-full my-5' type="submit" value="Add"/>
        </form>
    </div>
}

export default AddEmployePage;