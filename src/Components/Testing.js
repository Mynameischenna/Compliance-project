import React, { useEffect, useState } from 'react';
import './AddPlan.css';
import myimage from'./logo-new.png';

import { useNavigate } from 'react-router-dom';

import './Testing.css';
import {parseString} from 'xml2js'
import  Plans from './Plans.json'
import PlanInfo from './PlanInfo.json'
import xml from './test_xml.xml'
import {  FaFolder } from "react-icons/fa";
function Testing()
{
    const [plans,setPlans]=useState(Plans);
    const [currentPlan,setCurrentPlan]=useState();
    const [planInfo,setPLanInfo] = useState(PlanInfo);
    const [currentPLanInfo,setCurrentPlanInfo]=useState();
    const [readxml,setReadxml]=useState(null);
    // console.log("xml is "+readxml);
    const navigate=useNavigate()
    async function fetchXml(){
        const response = await fetch(xml);
        const xmldata = await response.text()
        return xmldata;
    }
    useEffect(()=>{
        async function fetchdata()
        {
            const xmldata=await fetchXml();
            parseString(xmldata,(err,result)=>{
                if(!err)
                {
                    setReadxml(result)
                    console.log("result is "+result);
                    console.log(readxml);
                }else{
                    console.error('error parsing ',err);
                }
            })
        }
    fetchdata();
    },[])
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
            planNumber:<input  style={{marginRight:"20px"}} value={currentPlan?.planNumber}/> 
            planId:<input value={currentPlan?.planName}/>
            
            
        </div>
        <div className='leftmenu'>
            <div className='side1'>
                {
                    plans.map((obj)=>(
                        <div className='side1style'>
                            <span style={{paddingRight:"10px"}}><FaFolder/></span><button style={{border:"none",background:"none"}} onClick={()=>inputfield(obj)}><span> {obj.planNumber} {obj.planName}</span></button>
                        </div>
                    ))
                }
            </div>
            <div className='side2'>
                <div>
                    <i class="jstree-icon jstree-ocl" role="presentation"></i>
                    <button style={{background:"none",border:"none"}}  onClick={()=>{sorting1("planNumber")}}>Plans by Number</button><br/>
                    <button style={{background:"none",border:"none"}} onClick={()=>{sorting("planName")} }>Plans By Name</button><br/>
                    <button style={{background:"none",border:"none"}} onClick={()=>{sorting("planName")} }>Plans By Client</button><br/>
                    <button style={{background:"none",border:"none"}} onClick={()=>{sorting("planName")} }>Plans In StartUp</button><br/>
                    <button style={{background:"none",border:"none"}} onClick={()=>{sorting("planName")} }>BY Institution</button><br/>
                    <button style={{background:"none",border:"none"}} onClick={()=>{sorting("planName")} }>Contacts</button><br/>
                    <button style={{background:"none",border:"none"}} onClick={()=>{sorting("planName")} }>By Analyst</button><br/>
                    <button style={{background:"none",border:"none"}} onClick={()=>{sorting("planName")} }>Termed Plans</button><br/>
                    <button onClick={()=>{sorting("planName")} }>Plans w/o Primary Contacts</button><br/>
                    <button onClick={()=>{sorting("planName")} }>Deleted Plans</button><br/>
                </div>
            </div>
        </div>
        <div className='rightmenu'>
            
                <div className='row1'>
                    <div className='row11'>
                        <input value={currentPLanInfo?.clientName}/>
                        <br/>Client Name
                    </div>
                    <div className='row11'>
                    <input value={currentPLanInfo?.prospectivePlanNumber}/>
                        <br/>Propective Plan Number
                    </div>
                </div>
                <div className='row1'>
                    <div className='row11'>
                    <input value={currentPLanInfo?.einNumber}/>
                        <br/>EIN #
                    </div>
                    
                </div>
                <div className='row1'>
                    <div className='row11'>
                        <input value={currentPLanInfo?.institution}/>
                        <br/>Institution
                    </div>
                    <div className='row11'>
                        <input value={currentPLanInfo?.groupOffice}/>
                        <br/>Group Office
                    </div>
                    <div className='row11'>
                    <input value={currentPLanInfo?.planType}/><br/>
                        Plan Type 
                    </div>
                    <div className='row11'>
                        <input value={currentPLanInfo?.trustEin}/><br/>
                        Trust Ein
                    </div>
                </div>
                <div className='row1'>
                    <div className='row11'>
                        <input value={currentPLanInfo?.subInstitution}/>
                        <br/>Sub Institution
                    </div>
                    
                </div>
                <div className='row1'>
                    <div className='row11'>
                        <input value={currentPLanInfo?.complianceAnalyst}/>
                        <br/>Compliance Analyst
                    </div>
                    <div className='row11'><button className='planbtn'>Plan Document</button></div>
                    <div className='row11'><button className='planbtn'>Plan Folder</button></div>
                    <div className='row11'><button className='planbtn'>Scan Sheets</button></div>
                    <div className='row11'><button className='planbtn'>Update FTW</button></div>
                </div>
                <div className='row1'>
                    <div className='row11'>
                        <input checked={currentPLanInfo?.secondaryCaseload} type='checkbox'/>Secondary Caseload
                    </div>   
                </div>

                <div className='row1'>
                    <div className='row11'>
                        <input checked={currentPLanInfo?.gwg} type='checkbox'/>GWG
                    </div> 
                    <div className='row11' style={{marginLeft:"120px"}}>
                        <input value={currentPLanInfo?.gwgServices}/>
                        <br/>GWG Services
                    </div>
                    <div className='row11'>
                        <input value={currentPLanInfo?.gwgWorkTracking}/>
                        <br/>GWG Work Tracking
                    </div> 
                    <div className='row11'><button className='planbtn'>GWG Follow Up</button> </div>
                    
                </div>
                <div className='row1'>
                    <div className='row11'>
                        <input value={currentPLanInfo?.planYearEnd} type='date'/>
                        <br/>Plan Year End
                    </div>
                    <div className='row11' style={{marginLeft:"63px"}}>
                        <input value={currentPLanInfo?.planTier}/>
                        <br/>Plan Teir
                    </div>
                    <div className='row11'>
                        <input value={currentPLanInfo?.irsPlanType}/><br/>
                        IRS Plan Type
                    </div>
                    <div className='row11'>
                        <input value={currentPLanInfo?.marketSegment}/><br/>
                        Market Segment
                    </div>
                </div>
                
                <div className='row1'>
                    <div className='row11' style={{marginRight:"21px"}}>
                        <input value={currentPLanInfo?.institution}/>
                        <br/>Institution
                    </div>
                    <div className='row11'>
                        <input value={currentPLanInfo?.groupOffice}/>
                        <br/>Group Office
                    </div>
                    <div className='row11'>
                        <input value={currentPLanInfo?.planType}/><br/>
                        Plan Type
                    </div>
                    <div className='row11'>
                        <input value={currentPLanInfo?.trustEin}/><br/>
                        Trust Ein
                    </div>
                </div>
                <div className='row1'>
                    <div className='row11'>
                        Plan Characteristics
                    </div>
                    <div className='row11'>
                        <input checked={currentPLanInfo?.jumbo401k} type='checkbox'/>Jumbo 401(k)
                    </div>
                </div>

                <div className='row1'>
                    <div className='row11' style={{marginRight:"55px"}}>
                    <input checked={currentPLanInfo?.ppsExternal} type='checkbox'/>PPSExternal
                    </div>
                    <div className='row11'>
                        <input checked={currentPLanInfo?.peakPilotPlan} type='checkbox'/>PEAK Pilot Plan
                    </div>
                </div>

                <button className='planbtn'>Submit</button>
                <div>
                    {readxml ?(<pre>{JSON.stringify(readxml,null,2)}</pre>):(<p>loading xml data</p>)}
                </div>
            </div>
        </div>
    
    )
}
export default Testing;
