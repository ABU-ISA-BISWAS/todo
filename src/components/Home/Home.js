import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const navigateToAddTask = () => {
        navigate('/add-task');
    }
    return (
        <div>
            
            <button className='btn btn-primary' onClick={() => navigateToAddTask()}>Add Task</button>
        </div>
    );
};

export default Home;