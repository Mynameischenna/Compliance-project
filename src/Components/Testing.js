import React, { useState } from 'react';
import './AddPlan.css';
import myimage from'./logo-new.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './Testing.css';
import  Plans from './Plans.json'
import PlanInfo from './PlanInfo.json'
function Testing()
{
    const [plans,setPlans]=useState(Plans);
    const [currentPlan,setCurrentPlan]=useState();
    const [planInfo,setPLanInfo] = useState(PlanInfo);
    const [currentPLanInfo,setCurrentPlanInfo]=useState();

    const navigate=useNavigate()
    
    function Home1()
    {
        return navigate("/Home")
    }
    function sortbynum()
    {
            const sorted=[...plans].sort((a,b)=>
            a>b ?1 :-1);
            setPlans(sorted)
    }
    const sorting1=(col)=>
    {
        const sorted=[...plans].sort((a,b)=>
        a[col]>b[col]?1 :-1);
        setPlans(sorted)
    }
    const sorting=(col)=>
    {
        
            const sorted=[...plans].sort((a,b)=>
            a[col].toLowerCase()>b[col].toLowerCase( ) ?1 :-1);
            setPlans(sorted)
            
        
        // if(order === 'DSC')
        // {
        //     const sorted=[...planInfo].sort((a,b)=>
        //     a[col].toLowerCase()<b[col].toLowerCase( ) ?1 :-1);
        //     setPlanInfo(sorted);
        //     setOrder("ASC");
        // }
    }
    function inputfield(obj){
        setCurrentPlan(obj);
        var output= planInfo.filter((plan)=>{
            return obj.id===plan.planId;
           
        })
        setCurrentPlanInfo(output[0]);
        
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
            planNumber:<input  value={currentPlan?.planNumber}/>
            planId:<input value={currentPlan?.planName}/>
            plannumber:<input value={currentPLanInfo?.clientName}/>
        </div>
        <div className='leftmenu'>
            <div className='side1'>
                {
                    plans.map((obj)=>(
                        <div>
                            <button onClick={()=>inputfield(obj)}><span>{obj.planNumber} {obj.planName}</span></button>
                        </div>
                    ))
                }
            </div>
            <div className='side2'>
                <div>
                    <button onClick={()=>{sorting1("planNumber")}}>Plan by Number</button>
                    <button onClick={()=>{sorting("planName")} }>PLan By Name</button>
                </div>
            </div>
        </div>
        <div className='rightmenu'>
            
                <div className='row1'>
                    <div>
                        <input value={currentPLanInfo?.clientName}/>
                        <br/>Client Name
                    </div>
                    <div>
                    <input value={currentPLanInfo?.clientName}/>
                        <br/>Propective Plan Number
                    </div>
                </div>
                <div className='row1'>
                    <div>
                    <input value={currentPLanInfo?.clientName}/>
                        <br/>EIN #
                    </div>
                    
                </div>
                <div className='row1'>
                    <div>
                        <input value={currentPLanInfo?.clientName}/>
                        <br/>Institution
                    </div>
                    <div>
                        <input/>
                        <br/>Group Office
                    </div>
                    <div>
                        <input/><br/>
                        PLan Type
                    </div>
                    <div>
                        <input/><br/>
                        Trust Ein
                    </div>
                </div>
                <div className='row1'>
                    <div>
                        <input/>
                        <br/>Sub Institution
                    </div>
                    
                </div>
                <div className='row1'>
                    <div>
                        <input/>
                        <br/>Compliance Analyst
                    </div>
                    <div><button className='planbtn'>Plan Document</button></div>
                    <div><button className='planbtn'>Plan Folder</button></div>
                    <div><button className='planbtn'>Scan Sheets</button></div>
                    <div><button className='planbtn'>Update FTW</button></div>
                </div>
                <div className='row1'>
                    <div>
                        <input type='checkbox'/>Secondary Caseload
                    </div>   
                </div>

                <div className='row1'>
                    <div>
                        <input type='checkbox'/>GWG
                    </div> 
                    <div>
                        <input/>
                        <br/>GWG Services
                    </div>
                    <div>
                        <input/>
                        <br/>GWG Work Tracking
                    </div> 
                    <div><button className='planbtn'>GWG Follow Up</button> </div>
                    
                </div>
                <div className='row1'>
                    <div>
                        <input type='date'/>
                        <br/>Plan Year End
                    </div>
                    <div>
                        <input/>
                        <br/>Plan Teir
                    </div>
                    <div>
                        <input/><br/>
                        IRS Plan Type
                    </div>
                    <div>
                        <input/><br/>
                        Market Segment
                    </div>
                </div>
                
                <div className='row1'>
                    <div>
                        <input/>
                        <br/>Institution
                    </div>
                    <div>
                        <input/>
                        <br/>Group Office
                    </div>
                    <div>
                        <input/><br/>
                        PLan Type
                    </div>
                    <div>
                        <input/><br/>
                        Trust Ein
                    </div>
                </div>
                <div className='row1'>
                    <div>
                        Plan Characteristics
                    </div>
                    <div>
                        <input type='checkbox'/>Jumbo 401(k)
                    </div>
                </div>

                <div className='row1'>
                    <div>
                    <input type='checkbox'/>PPSExternal
                    </div>
                    <div>
                        <input type='checkbox'/>PEAK Pilot Plan
                    </div>
                </div>

                <button className='planbtn'>Submit</button>
            </div>
        </div>
    
    )
}
export default Testing;
