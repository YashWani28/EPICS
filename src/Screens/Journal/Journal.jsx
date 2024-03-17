import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import JournalEntry from '../../Components/JournalEntry/JournalEntry';
import CalendarMenu from '../../Components/CalendarMenu/CalendarMenu';
import Calendar from '../../Components/Calendar/Calendar';
import Calendar2 from '../../Components/Calendar2/Calendar2';
import './Journal.css';
import data from './DummyData.js';
const Journal = () => {
    const [currDate,setCurrDate] = useState(new Date());
    const [currTitle,setCurrTitle] = useState("");
    const [currDesc,setCurrDesc] = useState("");
    //! use effect used for debugging and monitoring states
    useEffect(()=>{
        // console.log(currDate);
        // console.log(currTitle);
        // console.log(currDesc);
    },[currDate,currTitle,currDesc])
    const dateChangeEvent = (date)=>{
        setCurrDate(date); 
        let found=false;   
        data.forEach(obj => {
            if(obj.Date==date)
            {         
                found=true;     
                setCurrTitle(obj.Title);
                setCurrDesc(obj.Description);               
            }
           
        });
        if(!found)
        {
            setCurrTitle("");
            setCurrDesc("");    
        }

    }
    const handleSave = ()=>{
        console.log({
            "Date":currDate,
            "Title":currTitle,
            "Description":currDesc,
        })
    }
    return (
        <div className="journalparent">
            <Sidebar />
            <div className="yJournalRightSection">
                <Navbar firstname="Yash" lastname="Wani"/>
                <div className="yThreeParent">
                    <div className="yCalendar_JournalMenu">
                        <Calendar2 callbackDate={dateChangeEvent}/>
                        <CalendarMenu/>
                    </div>
                    <JournalEntry setdesc={currDesc} settitle={currTitle} callbackTitle={setCurrTitle} callbackDesc={setCurrDesc} saveit={handleSave}/>
                    

                </div>

            </div>

        </div>   
    )
}

export default Journal;