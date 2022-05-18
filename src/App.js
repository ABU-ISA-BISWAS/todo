import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddTask from './components/AddTask/AddTask';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Login from './components/Login/Login/Login';
import Header from './components/Header/Header';
import MyTask from './components/MyTask/MyTask';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/add-task' element={<RequireAuth><AddTask></AddTask></RequireAuth>}></Route>
       <Route path='/my-task' element={<RequireAuth><MyTask></MyTask></RequireAuth>}></Route>
     </Routes>
    </div>
  );
}

export default App;
