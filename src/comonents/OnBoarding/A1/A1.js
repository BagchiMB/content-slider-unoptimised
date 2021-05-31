import React from 'react';
import '../styles/A1.scss'
import Card from './Card'
import Build1 from '../../../assets/img/Build1.png'
import Build2 from '../../../assets/img/Build2.png'
import Build3 from '../../../assets/img/Build3.png'
import Build4 from '../../../assets/img/Build4.png'

const build=["Website Application","Website Informational or E-commerce","Mobile App Android or iOS","Both Web App and Mobile App"]
const A1 = ({setBuilding,building,transition}) => {

    const [selected,setSelected]=React.useState('')

    React.useEffect(()=>{
        if(selected===1)
            setBuilding("Website Application")
        else if(selected===2)
            setBuilding("Website Informational or E-commerce")
        else if(selected===3)
            setBuilding("Mobile App Android or iOS")
        else if(selected===4)
            setBuilding("Both Web App and Mobile App")
    },[selected])

    return (
        <div className={`A1 ${transition}`}>
            <h2 className="heading">What are you building?</h2>
            <p className="A1-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="A1-services">
                <Card setSelected={setSelected} title="Website Application" text="Lorem ipsum dolor sit amet, consectetur adipiscing" img={Build1} name="Build1" clicked={building===build[0]} id={1}/>
                <Card setSelected={setSelected} title="Website Informational or E-commerce" text="Lorem ipsum dolor sit amet, consectetur adipiscing" img={Build2} name="Build2" clicked={building===build[1]} id={2}/>
                <Card setSelected={setSelected} title="Mobile App Android or iOS" text="Lorem ipsum dolor sit amet, consectetur adipiscing" img={Build3} name="Build3" clicked={building===build[2]} id={3}/>
                <Card setSelected={setSelected} title="Both Web App and Mobile App" text="Lorem ipsum dolor sit amet, consectetur adipiscing" img={Build4} name="Build4" clicked={building===build[3]} id={4}/>
            </div>
        </div>
    );
};

export default A1;