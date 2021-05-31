import React from 'react';
import '../styles/TeamMem.scss'
import Cancel from '../../../assets/img/Cancel.png'

const TeamMem = ({initial,handleOpen,team,setTeam,member,group}) => {

    const remove= () =>
    {
        let t2=[...team[group]]
        let index=t2.indexOf(member)
        t2.splice(index,1)
        const obj={[group]:t2}
        const tempObj={...team,...obj}
        setTeam(tempObj)
    }

    return (
        <div className={'SingleTeamMemList'}>
            <div style={{border:initial?'1px dashed #C9CED5':'0px solid #fff',backgroundImage:initial?``:`url(${member.img})`,cursor:initial?'pointer':`context-menu`}} onClick={()=>initial && handleOpen()} className={`SingleTeamMem`}>
                {!initial && <img alt="cancel" src={Cancel} onClick={remove} />}
                <p className="Add">{initial && "+"}</p>
            </div>
        <p style={{backgroundColor:initial?'#fff':'rgba(155,40,243,0.1)'}}className="Mem-name">{member!==undefined && member.name}</p>
        </div>
    );
};

export default TeamMem;