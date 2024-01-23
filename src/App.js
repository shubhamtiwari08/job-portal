 
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MainRoutes from './Routing/MainRoutes';

function App() {

  return (
    <div className="App flex items-start font-poppins bg-[#F3F6F9]">
    <div className={`fixed z-10 top-0 left-0 lg:block`}>
    <Sidebar />
    </div>
   <div className="w-full lg:ml-[250px] overflow-auto pb-16">
     {" "}
     <Header  />
     <MainRoutes/>
   </div>
 </div>
  );
}

export default App;
