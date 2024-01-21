import React, { useState,useEffect } from 'react';
import mockdata from '../MOCK_DATA (1).json'
import './SortTable.css'
import Modal from 'react-modal';
import axios from 'axios';
import myimage from'./logo-new.png';
import { useNavigate } from 'react-router-dom';
function SortTable() {

    const url='http://localhost:8081/';
    const [needHelp,setNeedHelp]=useState(null);
    const [planInfo,setPlanInfo]=useState([]);
    const [data,setData] =useState(mockdata);
    const [order,setOrder]= useState('ASC'); 
    const [selectedUser,setselectedUser]=useState(null);
    const showDetails=(userid)=>{
      setselectedUser(data[userid]);
    }
    const closeModal=()=>{
      setselectedUser(null);
    }
    const closeModalHelp=()=>{
      setNeedHelp(null);
    }
    console.log(selectedUser);
    const navigate=useNavigate();
    const sorting=(col)=>
    {
        if(order === 'ASC')
        {
            const sorted=[...planInfo].sort((a,b)=>
            a[col].toLowerCase()>b[col].toLowerCase( ) ?1 :-1);
            setPlanInfo(sorted);
            setOrder("DSC");
        }
        if(order === 'DSC')
        {
            const sorted=[...planInfo].sort((a,b)=>
            a[col].toLowerCase()<b[col].toLowerCase( ) ?1 :-1);
            setPlanInfo(sorted);
            setOrder("ASC");
        }
    }
    function goToHome()
    {
        return navigate("/")
    }
    function needHelpFun()
    {
        setNeedHelp("activate");
    }
    useEffect(()=>{
      axios.get("http://localhost:8081/plans")
      .then(res=>setPlanInfo(res.data))
      .catch(err =>console.log(err))
      
      
    },[])
  return <div>
     <header className="pandu">
                <div>
                <img className="image1" src={myimage} alt="not found"></img>
                
                </div>
                <h1>PLAN INFO FORM</h1>
                <button className='homeButton' onClick={goToHome}>Home</button>
                <button className='helpButton' onClick={needHelpFun}>Need Help?</button>
            </header>
      <br></br>
      <table className="table1">
        <thead>
          <tr>
            <th onClick={()=>sorting("ev_id")}>EV ID</th>
            <th onClick={()=>sorting("last_name")}>PLAN NAME</th>
            <th onClick={()=>sorting("email")}>ISRL CODE</th>
            <th onClick={()=>sorting("gender")}>GA ID</th>
            
          </tr>
        </thead>
        <tbody>
          {
            planInfo.map((d,index)=>
            (
            <tr key={index}>
                <td onClick={()=>showDetails(d.id-1)}>{d.ev_id}</td>
                <td onClick={()=>showDetails(d.id-1)}>{d.plan_nam}</td>
                <td onClick={()=>showDetails(d.id-1)}>{d.isrl_code}</td>
                <td onClick={()=>showDetails(d.id-1)}>{d.ga_id}</td>
              
          </tr>
            ))}
          
          
        </tbody>
      </table>

      {/* <button onClick={}>ADD  USER</button> */}
      <Modal
        isOpen={!!selectedUser}
        onRequestClose={closeModal}
        contentLabel="modal"
        className={"modal"}>
          {selectedUser &&(<>
           <h2 style={{textAlign: "center",marginTop:"-8px"}}>User Details</h2>
           <p>Firs Name : {selectedUser.first_name}</p>
           <p>Last Name : {selectedUser.last_name}</p>
           <p>Email : {selectedUser.email}</p>
           <p>Gender : {selectedUser.gender}</p>
           <button className='modalButton' onClick={closeModal}>close </button>
          </>)}
      </Modal>

      <Modal
                    isOpen={!!needHelp}
                    onRequestClose={closeModalHelp}
                    contentLabel="modal"
                    className={"modal"}>
                    {needHelp &&(<>
                    <p>you can add plan here </p>
                    
                    <button className='modalButton' onClick={closeModalHelp}>close </button>
          </>)}
      </Modal>
  </div>;
}

export default SortTable;