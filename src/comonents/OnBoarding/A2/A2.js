import React from 'react';
import '../styles/A2.scss'
import Goal1 from '../../../assets/img/Goal1.png'
import Goal2 from '../../../assets/img/Goal2.png'
import Goal3 from '../../../assets/img/Goal3.png'
import Card from './Card'

const goalcheck=["Create a product from scratch","Add a features to an existing product","Create a MVP to test a market"]
const A2 = ({setGoal,goal,transition}) => {

    const [selected,setSelected]=React.useState('')

    React.useEffect(()=>{
        if(selected===1)
            setGoal("Create a product from scratch")
        else if(selected===2)
            setGoal("Add a features to an existing product")
        else if(selected===3)
            setGoal("Create a MVP to test a market")
    },[selected])

    return (
        <div className={`A2 ${transition}`}>
            <h2>What is your product goal?</h2> 
            <p className="A2-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="A2-services">
                <Card setSelected={setSelected} title="Create a product from scratch" text="Lorem ipsum dolor sit amet, consectetur adipiscing" img={Goal1} clicked={goal===goalcheck[0]} id={1}/>
                <Card setSelected={setSelected} title="Add a features to an existing product" text="Lorem ipsum dolor sit amet, consectetur adipiscing" img={Goal2} clicked={goal===goalcheck[1]} id={2}/>
                <Card setSelected={setSelected} title="Create a MVP to test a market" text="Lorem ipsum dolor sit amet, consectetur adipiscing" img={Goal3} clicked={goal===goalcheck[2]} id={3}/>
            </div>
        </div>
    );
};

export default A2;