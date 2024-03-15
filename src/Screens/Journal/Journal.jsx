import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Journal.css';
const Journal = () => {
    return (
        <div className="journalparent">
            <Sidebar />
            <Navbar firstname="Yash" lastname="Wani"/>
        </div>
    )
}

export default Journal;