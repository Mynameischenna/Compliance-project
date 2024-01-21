import React, { useState } from 'react';
import myimage from'./logo-new.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './Testing.css';
function Home()
{
    const navigate=useNavigate();
    function planInfo()
    {
        navigate('/planInfo')
    }
    function setUp()
    {
        navigate("/SetUp")
    }
    return (
    <div className='body'>
        <header className="header1">
            <div className='head1'>
                
                <div className='sub0'>
                    <img className="image1" src={myimage} alt="not found"></img>
                    <h3 className='testingP'>Compliance</h3>
                </div>
                <div className='sub01'>
                    <button className='btn1' >Home</button>
                    <button className='btn1' onClick={planInfo}>Plan Info</button>
                    <button className='btn1' onClick={setUp}>SetUp</button>
                    <button className='btn1'>PYE</button>
                    <button className='btn1'>Event Log</button>
                    <button className='btn1'>Contacts</button>
                    <button className='btn1'>Amendments</button>
                    <button className='btn1'>Test</button>
                    
                </div>
                
            </div>
        </header>
        
        <div className='planname'>
            planNumber:<input placeholder='balu'></input>
            planId:<input placeholder='balu'></input>
        </div>
        <div className='leftmenu'>
            <div className='side1'>
                side1
            </div>
            <div className='side2'>
                side2
            </div>
        </div>
        </div>
    )
}
export default Home;
