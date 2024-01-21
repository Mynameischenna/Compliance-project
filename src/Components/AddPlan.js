import React, { useState } from 'react';
import './AddPlan.css';
import myimage from'./logo-new.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
function AddPlan()
{
    const url='http://localhost:8081/';
    const [user,setUser]=useState({
        ev_id:'',
        plan_nam:'',
        isrl_code:'',
        ga_id:''
    });
    const navigate=useNavigate();
    const [needHelp,setNeedHelp]=useState(null);

    function goToHome()
    {
        return navigate("/")
    }

    function handle(e)
    {
        const newdata={...user}
        newdata[e.target.id]=e.target.value;
        setUser(newdata)
        console.log(newdata);
    }
    function addPlan(e)
    {
       e.preventDefault();
       axios.post(url+"addPlan",{
        ev_id:user.ev_id,
        plan_nam:user.plan_nam,
        isrl_code:user.isrl_code,
        ga_id:user.ga_id
       })
       .then(() => {
        alert('Item added');
        window.location.reload(false);
      })
      .catch(() => {
        alert('Error');
      });
    }
    function updatePlan(e)
    {
        e.preventDefault();
        axios.put(url+"update",{
         ev_id:user.ev_id,
         plan_nam:user.plan_nam,
         isrl_code:user.isrl_code,
         ga_id:user.ga_id
        })
        .then(() => {
         alert('Item Updated');
         window.location.reload(false);
       })
       .catch(() => {
         alert('Error');
       });
    }
    function deletePlan()
    {
        
        axios.delete(url+`deletePlan/${user.ev_id}`)
        .then(() => {
         alert('Item deleted');
         window.location.reload(false);
       })
       .catch(() => {
         alert('Error');
       });
    }
    function displayFun()
    {
        return navigate("/planTable")
    }
    function needHelpFun()
    {
        setNeedHelp("activate");
    }
    const closeModal=()=>{
        setNeedHelp(null);
      }
    return(
        <div className="main">
        <header className="pandu">
            <div>
            <img className="image1" src={myimage} alt="not found"></img>
            
            </div>
            <h1>PLAN INFO FORM</h1>
            <button className='homeButton' onClick={goToHome}>Home</button>
            <button className='helpButton' onClick={needHelpFun}>Need Help?</button>
        </header>
            <body>
            
                <form className="form">
                    <p  className="label1">EV id</p>
                    <input onChange={(e)=>handle(e)} type="number" id="ev_id" value={user.ev_id} ></input>
                    <br></br>
                   
                    <p  className="label1">PLAN NAME</p>
                    <input onChange={(e)=>handle(e)}  type="text" id="plan_nam" value={user.plan_nam}></input>
                    <br></br>
                    <p  className="label1">ISRL CODE</p>
                    <input  onChange={(e)=>handle(e)} type="text" id="isrl_code" value={user.isrl_code}></input>
                    <br></br>
                    <p className="label1"  id='ga_id'>GA ID</p>
                    <input onChange={(e)=>handle(e)} type="number" id="ga_id" value={user.ga_id}></input>
                    <br></br>    
                </form>
                <div className="btn">
                    <button className="btn1 bn" onClick={(e)=>addPlan(e)}>add</button>
                    <button className="btn2 bn" onClick={(e)=>updatePlan(e)}>update</button>
                    <button className="btn3 bn" onClick={deletePlan}>delete</button>
                    <button className="btn4 bn" onClick={displayFun}>display</button>
                </div>


            <Modal
                isOpen={!!needHelp}
                onRequestClose={closeModal}
                contentLabel="modal"
                className={"modal"}>
                {needHelp &&(<>
                <p>you can add plan here </p>
                
                <button className='modalButton' onClick={closeModal}>close </button>
        </>)}
        </Modal>
            </body>
        </div>
    );
}
export default AddPlan;