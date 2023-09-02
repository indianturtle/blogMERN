import './App.css';
import {Route, Routes} from 'react-router-dom';
import Blogheader from './Blogheader';
import Home from './Pages/home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { UserContextProvider } from './UserContext';
import CreatePost from './Pages/CreatePost';
import Pagepost from './Pages/Pagepost';
import EditPost from './Pages/EditPost';


function App() {
  return (
      <UserContextProvider>
        
          <main>
            <Blogheader/>
            <Routes>
              <Route path="/" element = {<Home/>}/>
              <Route path = "/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path = "/create" element = {<CreatePost/>}/>
              <Route path='/post/:id' element = {<Pagepost/>}/>
              <Route path = '/edit/:id' element = {<EditPost/>}/>
            </Routes>
          </main>
        
      </UserContextProvider>
      
    
  );
}

export default App;
