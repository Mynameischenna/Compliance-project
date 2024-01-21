import React, { useState } from 'react';
import './AddPlan.css';
import myimage from'./logo-new.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './Testing.css';
function SetUp()
{
    const navigate=useNavigate()
    function Home1()
    {
        return navigate("/Home")
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
                    <button className='btn1' onClick={Home1}>Home</button>
                    <button className='btn1'>Plan Info</button>
                    <button className='btn1'>SetUp</button>
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
        <div className='rightmenuSU'>
            
                <div className='subright'>
                    <input className='setupinput'/> Implement Mgr
                </div>
                <div className='subright'>
                    <input className='setupinput'/> Transfer Asset Amt
                </div>
                
                <div className='subright'>
                    <input className='setupinput'/> Doc Type
                </div>

                <div className='subright'>
                    <input className='setupinput' type='checkbox'/> Internal Loan Admin
                </div>

                <div className='subright'>
                    <input className='setupinput' type='checkbox'/> Outside Funds
                </div>

                <div className='subright'>
                    <input className='setupinput'/> Service Effective
                </div>

                <div className='subright'>
                    <input className='setupinput'/> Expected First Payroll
                </div>

                <div className='subright'>
                    <input className='setupinput'/> Implementation Type
                </div>

                <div className='subright'>
                    <input className='setupinput' type='checkbox'/> SDA
                </div>

                <div className='subright'>
                    <input  className='setupinput'type='checkbox'/> Modefied SPD
                </div>
                <div className='subright'>
                    <input className='setupinput'/> Compliance Effective
                </div>
                <div className='subright'>
                    <input className='setupinput'/> Deposite Amount
                </div>
                <div className='subright'>
                    <input className='setupinput'/> Conversion Form
                </div>
                <div className='subright'>
                    <input  className='setupinput'type='checkbox'/> GWTC/EMJAY Trustee
                </div>
                <div className='subright'>
                    <input  className='setupinput'type='checkbox'/> Reliance Trust Company
                </div>
                <div className='subright'>
                    <input className='setupinput'/> Plan Effecctive
                </div>

                <div className='subright'>
                    <input className='setupinput'/> # Companies (Merger)
                </div>

                <div className='subright'>
                    <input className='setupinput'/> Employee  Count
                </div>

                <div className='subright'>
                    <div className='subbtn'>
                        <button className='planbtn'> Document Packer Email</button>
                        <button className='planbtn'> Move Electric Files To Imaging</button>
                        <button className='planbtn'> Move Docs To PSC</button>
                    </div>
                    

                </div>
                <div className='subright'>
                    <div className='subbtn'>
                            <button className='planbtn'> Generic  E-Mail</button>
                            <button className='planbtn'> Termination CheckList</button>
                        </div>
                </div>
                <div className='subright'>
                    <div className='subbtn'>
                            <button className='planbtn'> America Funds Forms</button>
                            
                        </div>
                </div>
        </div>
    </div>
    )
}
export default SetUp
