import React from 'react';
import '../styles/A4.scss'
import Card from './Card'
import skill1 from '../../../assets/img/skill1.png'
import skill2 from '../../../assets/img/skill2.png'
import skill3 from '../../../assets/img/skill3.png'

import Select from 'react-select';

const skillCheck=['Design','Development','Management']

const options = [
    { value:2, label: '2 peoples' },
    { value:3, label: '3 peoples' },
    { value:4, label: '4 peoples' },
    { value:5, label: '5 peoples' },
  ];

const A4 = ({transition,setSkill,skill,num,setNum}) => {

    const [selected,setSelected]=React.useState('')
    const [peeps, setPeeps] = React.useState(null);

    React.useEffect(()=>{
        if(num!=='')
        {
            options.map((ele,idx)=>{
                if(ele.value===num)
                    setPeeps(options[idx])
            })
        }
    },[num])

    const handleChange = (optionSelected) => {
        setPeeps(optionSelected)
        setNum(optionSelected.value)     
      };

    React.useEffect(()=>{
        if(selected===1)
            setSkill("Design")
        else if(selected===2)
            setSkill("Development")
        else if(selected===3)
            setSkill("Management")
    },[selected])

    return (
        <div className={`A4 ${transition}`}>
            <h2>What team members are you looking for? And what skill level for each.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="A4-services">
                <Card setSelected={setSelected} title="Design" img={skill1} clicked={skill===skillCheck[0]} id={1} />
                <Card setSelected={setSelected} title="Development" img={skill2} clicked={skill===skillCheck[1]} id={2} />
                <Card setSelected={setSelected} title="Management" img={skill3} clicked={skill===skillCheck[2]} id={3} />
            </div>  
            <p className="Team">How much people on the team?</p>

            <Select
                value={peeps}
                onChange={handleChange}
                options={options}
                isSearchable={false}
            />

        </div>
    );
};

export default A4;