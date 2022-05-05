
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import LaptopDetails from './Components/LaptopDetails/LaptopDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddItem from './Components/AddItem/AddItem';
import MyItem from './Components/MyItem/MyItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <LaptopDetails></LaptopDetails>
          </RequireAuth>
        }></Route>
        <Route path='/addnew' element={<AddItem></AddItem>}></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
