
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'
import Cards from './Components/Cards/Cards'
import ServiceInfo from './Components/ServiceInfo/ServiceInfo'
import Working from './Components/Working/Working'
import ContactUs from './Components/ContactUs/ContactUs'
import Plans from './Components/Plans/Plans'
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import Signup from './Components/Signup/Signup';
import initializeAuthentication from './Firebase/firebase.initialize';
import PrivateRoute from './Components/Login/PrivetRoute/PrivateRoute'
initializeAuthentication();

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      
      <Router>
             <Header></Header>
        <Switch>
             <Route exact path="/">
                       <Home></Home>
            </Route>
            <Route path="/services">
                      <Services></Services>
             </Route> 
            <Route path="/login">
                      <Login></Login>
             </Route> 
            <Route path="/signup">
                      <Signup></Signup>
             </Route> 
             
             <Route path="/working">
                       <Working></Working>
            </Route>
             <Route path="/contact">
                       <ContactUs></ContactUs>
            </Route>
             <Route path="/plans">
                       <Plans></Plans>
            </Route>
             <Route path="/home">
                       <Home></Home>
            </Route>
            
             <PrivateRoute path="/cards">
                       <Cards></Cards>
            </PrivateRoute>
            
             <PrivateRoute path="/serviceinfo/:serviceId">
                       <ServiceInfo></ServiceInfo>
            </PrivateRoute>
             
            
             
           <Route path="*">
                       <NotFound></NotFound>
            </Route>
        
        
      </Switch>
           
           <Footer></Footer>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
