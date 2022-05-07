
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
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <LaptopDetails></LaptopDetails>
          </RequireAuth>
        }></Route>
        <Route path='/addnew' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
