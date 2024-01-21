import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import myimage from'./logo-new.png';

function SearchUser()

{
    const [user, setUser] = useState('');
    const [input1,setInput1]=useState('');
    const navigate=useNavigate();
  
  

  const loadUser = async (userid) => {
    
    const result = await axios.get(`http://localhost:8081/planById/${userid}`);
    setUser(result.data);
    
    
    
    
  };
  const handleEvent=(event)=>{
    setInput1(event.target.value)
  }
  
  console.log(typeof(user));

  function handleAddPlan()
  {
    navigate("/addPlan")
  }
  function PlanTable()
  {
    navigate("/planTable")
    
  }
  function testing()
  {
    return navigate("/Home");
  }

    return(
        <div>
          <header className="pandu">
                <div>
                <img className="image1" src={myimage} alt="not found"></img>
                
                </div>
                <h1>PLAN INFO FORM</h1>

            </header>
    <br></br>
    <div className='searchPlanPage'>
        <div>
          <input type="text" placeholder="Enter Id" className="id" value={input1} onChange={handleEvent}></input>
          <button className="btn1" onClick={()=>loadUser(input1)}>Search</button>
          
        </div>
        
        <button className="btn1" onClick={handleAddPlan}>Add Plan</button>
        <button className="btn1" onClick={PlanTable}>Plans</button>
        <button className='btn1' onClick={testing}>Home</button>
    </div>
      <div className='plan_info1'>
          <h1>Plan Details</h1>
          <p>EV:ID : {user.ev_id}</p>
          <p>Plan Name:{user.plan_nam}</p>
          <p>Ga id: {user.ga_id}</p>
          <p>Isrl Code :{user.isrl_code}</p>
      </div>    
    </div>
        
    );
    

}
export default SearchUser;