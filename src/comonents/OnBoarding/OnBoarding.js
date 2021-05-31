import React from 'react';
import NavBoard from './NavBoard'
import Next from './Next'
import A1 from './A1/A1'
import A2 from './A2/A2'
import A3 from './A3/A3'
import A4 from './A4/A4'
import A5 from './A5/A5'
import A6 from './A6/A6'
import A7 from './A7/A7'
import A8 from './A8/A8'
import FH from '../../hooks/useFormHook'
import './styles/onboarding.scss'


const OnBoarding = ({open,handleOpen,handleClose}) => {

    const [T,setT]=React.useState('A1')
    const [building, setBuilding]=React.useState('')
    const [goal, setGoal]=React.useState('')
    const [companyName,setCompanyName]=FH('')
    const [name,setName]=FH('')
    const [skill,setSkill]=React.useState('')
    const [num,setNum]=React.useState(5)

    const [stack,setStack]=React.useState({Client:'',Backend:'',Database:'',Services:''})
    const [start,setStart]=React.useState(null)

    const [team,setTeam]=React.useState({Design:[],Development:[],Management:[]})
    const [budget,setBudget]=React.useState(50)


    const [transition,setTransition]=React.useState('slideIn')

    const helper=()=>
    {
        if(T==='A1')
            return <A1 setBuilding={setBuilding} building={building} transition={transition}/>
        if(T==='A2')
            return <A2 setGoal={setGoal} goal={goal} transition={transition} />
        if(T==='A3')
            return <A3 setCompanyName={setCompanyName} companyName={companyName} setName={setName} name={name} transition={transition} />
        if(T==='A4')
            return <A4 setSkill={setSkill} skill={skill} setNum={setNum} num={num} transition={transition} />
        if(T==='A5')
            return <A5 stack={stack} setStack={setStack} transition={transition} />
        if(T==='A6')
            return <A6 start={start} setStart={setStart} transition={transition} />
        if(T==='A7')
            return <A7 team={team} open={open} handleOpen={handleOpen} handleClose={handleClose} setTeam={setTeam} transition={transition} num={num} />
        if(T==='A8')
            return <A8 transition={transition} budget={budget} setBudget={setBudget}/>
    }

    return (
        <div className="onBoarding">
            <NavBoard />
            <div className="ContentWrapper">
                <div className="Content">
                    {helper()}
                </div>
            </div>
            <Next vis={T!=='A1'} T={T} setT={setT} building={building} goal={goal} companyName={companyName} name={name} skill={skill} num={num} stack={stack} start={start} team={team} setTransition={setTransition}/>
        </div>
    );
};

export default OnBoarding;