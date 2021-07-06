import './App.css';
import { FaDigitalOcean } from 'react-icons/fa';
import { BsPeopleCircle } from 'react-icons/bs';
import { BiNotepad } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';


function App() {
  return (
    <div class="row">
      <div class="column1">
        <div className="search" >
          <FaDigitalOcean size={50} onClick=""/> 
          <p></p>
        </div>
        <div className="students" >
          <BsPeopleCircle size={50} onClick=""/>
          <p>Students</p>
        </div>
        <div className="notepad" >
            <button onClick="myfunction()">
                <BiNotepad size={50} />
                <p >Lesson Plan</p>
            </button>
        </div>
        <div className="settings" >
          <FiSettings size={50} onClick=""/>
          <p>Settings</p>
        </div>                  
      </div> 
      <div class="column2">
        <p>videos</p>
        <input type="text" placeholder="Insert URL here " id="inputId" size="50"></input>
        <input type="file" id="img" name="img" accept="video/*"></input>
      </div>
    </div>
    
    
  );
}

export default App;
