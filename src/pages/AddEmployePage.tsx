import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHierarchy } from '../utils/network';
import { setMsg } from '../utils/rawDataReducer';

function AddEmployePage (){
    const {register, handleSubmit}  =useForm();
    const {data}  = useSelector((state:any)=>state.rawData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleForm = async (d:any) => {
        d["id"] = parseInt(data[data.length-1][1].id) + 1;
        const res = await addHierarchy(d);
        if(res){
            dispatch(setMsg("Added Success-fully"))
            navigate("/");
        }
    }

    useEffect(()=>{
        console.log(data);
    },[])
    return <div className='text-center w-full'>
        <h1 className='font-bold text-xl text-slate-600	'>Add New Employee Hierarchy</h1>
        
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