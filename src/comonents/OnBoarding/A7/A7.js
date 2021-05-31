import React,{useState} from 'react';
import TeamMem from './TeamMem'
import '../styles/A7.scss'
import Modal from 'react-modal';
import SelectTeam from './SelectTeam'


const customStyles = {
    content : {
      top: '0px',
      left: '0%',
      height:'100vh',
      width:'100vw',
    }
  };


// const arr=[
//     {id:1,selected:false,img:Mem1,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:2,selected:false,img:Mem2,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:3,selected:false,img:Mem3,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:4,selected:false,img:Mem4,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:5,selected:false,img:Mem5,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:6,selected:false,img:Mem6,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:7,selected:false,img:Mem7,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:8,selected:false,img:Mem8,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
// ]

// const meow=[
//     {id:1,selected:false,img:Mem1,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:2,selected:false,img:Mem2,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:3,selected:false,img:Mem3,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:4,selected:false,img:Mem4,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:5,selected:false,img:Mem5,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:6,selected:false,img:Mem6,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:7,selected:false,img:Mem7,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:8,selected:false,img:Mem8,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
// ]

// const Pushper=[
//     {id:1,selected:false,img:Mem1,name:"Charlie",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:2,selected:false,img:Mem2,name:"Charlie",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:3,selected:false,img:Mem3,name:"Charlie",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:4,selected:false,img:Mem4,name:"Charlie",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:5,selected:false,img:Mem5,name:"Charlie",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:6,selected:false,img:Mem6,name:"Charlie",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:7,selected:false,img:Mem7,name:"Charlie",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
//     {id:8,selected:false,img:Mem8,name:"Charlie",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
// ]

const A7 = ({transition,num,team,setTeam,open,handleOpen,handleClose}) => {

    const [selected,setSelected]=useState("Design")
    


    const helper=()=>
    {
        let arr=[]
        if(selected==="Design")
        {
            for(let i=0;i<num;i++)
            {
                if(i<team.Design.length)
                    arr.push(<TeamMem key={i} group={selected} initial={false} team={team} setTeam={setTeam} member={team[selected][i]} w={Math.floor(100/num)-5} handleOpen={handleOpen}/>)                
                else
                    arr.push(<TeamMem key={i} group={selected} initial={true} team={team} setTeam={setTeam} member={team[selected][i]} w={Math.floor(100/num)-5} handleOpen={handleOpen}/>)
            }
        }
        else if(selected==="Development")
        {
            for(let i=0;i<num;i++)
            {
                if(i<team.Development.length)
                    arr.push(<TeamMem key={i} group={selected} initial={false} team={team} setTeam={setTeam} member={team[selected][i]} w={Math.floor(100/num)-5} handleOpen={handleOpen}/>)                
                else
                    arr.push(<TeamMem key={i} group={selected} initial={true} team={team} setTeam={setTeam} member={team[selected][i]} w={Math.floor(100/num)-5} handleOpen={handleOpen}/>)
            }
        }
        else if(selected==="Management")
        {
            for(let i=0;i<num;i++)
            {
                if(i<team.Management.length)
                    arr.push(<TeamMem key={i} group={selected} initial={false} team={team} setTeam={setTeam} member={team[selected][i]} w={Math.floor(100/num)-5} handleOpen={handleOpen}/>)                
                else
                    arr.push(<TeamMem key={i} group={selected} initial={true} team={team} setTeam={setTeam} member={team[selected][i]} w={Math.floor(100/num)-5} handleOpen={handleOpen}/>)
            }
        }
        return arr
    }

    const helper2 = () => 
    {
        if(selected==='Design')
        {
            return <SelectTeam team={team} setTeam={setTeam} handleClose={handleClose} num={num} group={selected}/>
        }
        else if(selected==='Development')
        {
            return <SelectTeam team={team} setTeam={setTeam} handleClose={handleClose} num={num} group={selected}/>
        }
        else if(selected==='Management')
        {
            return <SelectTeam team={team} setTeam={setTeam} handleClose={handleClose} num={num} group={selected}/>
        }
    }
    return (
        <React.Fragment>
            <div className={`A7 ${transition}`}>
                <h2>Team selection</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="Teams">
                    <h3 onClick={()=>setSelected("Design")}className={`${selected==="Design"&&"selected"}`}>Design</h3>
                    <h3 onClick={()=>setSelected("Development")}className={`${selected==="Development"&&"selected"}`}>Development</h3>
                    <h3 onClick={()=>setSelected("Management")}className={`${selected==="Management"&&"selected"}`}>Management</h3>
                </div>
                <div className="TeamMembers">
                    {helper()}
                </div>            
            </div>

            <Modal
                ariaHideApp={false}
                isOpen={open}
                // onAfterOpen={afterOpenModal}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel="Select Team Modal"
                closeTimeoutMS={500}
                >
                {/*helper2()*/}
                {<SelectTeam team={team} setTeam={setTeam} handleClose={handleClose} num={num} group={selected}/>}

            </Modal>
        </React.Fragment>
        
    );
};

export default A7;