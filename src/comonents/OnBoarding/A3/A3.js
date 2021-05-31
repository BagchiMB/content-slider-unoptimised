import React from 'react';
import '../styles/A3.scss'

const A3 = ({transition,name,companyName,setCompanyName,setName}) => {


    return (
        <div className={`A3 ${transition}`}>
            <h2>Tell us about your Company Info & Name</h2>
            <input className="FirstInp" value={name} onChange={setName} placeholder="Your Name here ..."/>
            <input className="SecInp" value={companyName} onChange={setCompanyName} placeholder="Company Name here ..."/>
        </div>
    );
};

export default A3;