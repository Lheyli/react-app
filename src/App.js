import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./component/pages/About";
import Dashboard from "./component/admin/Dashboard";
import Contact from "./component/pages/Contact";
import PageNotFound from "./component/admin/PageNotFound";
import Navbar from "./component/layout/Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Adduser from "./component/users/Adduser";
import EditUser from "./component/users/EditUser";
import User from "./component/users/User";
import Vote from "./component/users/Vote";
import Home from "./component/pages/Home";


function App() {
  return (
    <Router>
        <div className="App">
        <Navbar/>
       
        <Routes>
        
            <Route path="/dash" exact element={<Dashboard/> } />
            <Route path="/" exact element={ <Home/> } />
            <Route path="/contact" exact element={ <Contact/> } />
            <Route path="/about" exact element={ <About/> } />
            <Route path="/users/add" exact element={ <Adduser/> } />
            <Route path="/users/vote/:id" exact element={ <Vote/> } />
            <Route path="/users/edit/:id" exact element={ <EditUser/> } />
            <Route path="/users/:id" exact element={ <User/> } />
            <Route path="/*" exact element={ <PageNotFound/> } />

        </Routes>
    </div>
    </Router>
  );
}

export default App;
