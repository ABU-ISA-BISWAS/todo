import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';




const MyTask = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [task, setTask] = useState([]);
   

    useEffect(() => {
        fetch('https://lit-citadel-94085.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTask(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://lit-citadel-94085.herokuapp.com/task/${id}`;
            fetch(url, {
                method: 'DELETE',

            })

                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        const remaining = task.filter(t => t._id !== id);
                        setTask(remaining);
                    }

                })
        }
    }
    return (
        <div>
        <div>
            <p className='fw-bold fs-3 mt-4'>MY TASKS : {task.length}</p>
            <div className='w-75 mx-auto'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            task.map(t => <tr>
                                
                                <td>{t.name}</td>
                                <td>{t.description}</td>
                               

                                <td>
                                    <div key={t._id} >
                                        <button className='btn btn-danger me-2' onClick={() => handleDelete(t._id)}>Delete</button>





                                    </div>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
    );
};

export default MyTask;