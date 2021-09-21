import react,{useState} from "react";
import './App.css';
const App=()=>{

  const [users,setUsers] = useState([]);

  const loadUsers= async()=>{
    
    const response = await fetch ("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse["data"]);
  };
  
  return <div> 
    
    <div class="navbar"> Lets grow more
      </div><div><h1>Shreenath S P </h1>
  <button onClick={loadUsers} class="button">get data</button>
  <h2>Users:</h2>
  <div >
    {users.map(  ({id,first_name,last_name,avatar}) => (<table class="table" ><tr><td><img src={avatar}/> </td></tr><tr><td>First Name:{first_name}</td></tr>
    <tr><td>LastName:{last_name}</td></tr>
    </table>))}
    </div>
  </div>
  
  </div>
  ;
}

export default App;
