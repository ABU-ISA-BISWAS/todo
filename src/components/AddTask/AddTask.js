import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import './AddTask.css';

const AddTask = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const url = `https://lit-citadel-94085.herokuapp.com/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())

            .then(result => { })
        reset();
    };
    return (
        <div className='addTaskContainer'>
            <div className=' mx-auto addTaskForm'>
                <p className='fw-bold fs-4 text-primary mt-5'>ADD A TASK</p>
                <form className='d-flex flex-column animate__animated animate__zoomIn' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Task Name' {...register("name", { required: true, maxLength: 10 })} />
                   
                    <textarea className='mb-3' placeholder='Description' {...register("description")} />
                    
                    <input className='mx-auto w-50' id='submit' type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default AddTask;