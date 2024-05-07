
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import News from './components/news';
import {
 
  Routes, Route
} from "react-router-dom";


function App() {

  const apikey = process.env.REACT_APP_NEWS_API

  return (
   
  
      
<div className='App'>
    <Navbar/>  
      <Routes>
       
      <Route exact path='/' element={<News key="general" apikey={apikey} pageSize={6} category="general"/>} />
      <Route exact path='/business' element={<News key="business" apikey={apikey} pageSize={6} category="business"/>} />
      <Route exact path='/entertainment' element={<News key="entertainment" apikey={apikey} pageSize={6} category="entertainment"/>}/>
      <Route exact path='/health' element={<News key="health" apikey={apikey} pageSize={6} category="health"/>}/>
      <Route exact path='/science' element={<News key="science" apikey={apikey} pageSize={6} category="science"/>}/>
      <Route exact path='/technology' element={<News key="technology" apikey={apikey} pageSize={6} category="technology"/>}/>
      <Route exact path='/sports' element={<News key="sports" apikey={apikey} pageSize={6} category="sports"/>}/>

      </Routes>
    <Footer/>
      
      
 
</div>
      
      
      
  
    
      
     
  
  );
}

export default App;
