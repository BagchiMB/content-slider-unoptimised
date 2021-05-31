import React from 'react';
import '../styles/SelectTeam.scss'
import NavBoard from '../NavBoard'
import Card from './Card'

import Mem1 from '../../../assets/img/Mem1.png'
import Mem2 from '../../../assets/img/Mem2.png'
import Mem3 from '../../../assets/img/Mem3.png'
import Mem4 from '../../../assets/img/Mem4.png'
import Mem5 from '../../../assets/img/Mem5.png'
import Mem6 from '../../../assets/img/Mem6.png'
import Mem7 from '../../../assets/img/Mem7.png'
import Mem8 from '../../../assets/img/Mem8.png'


const arr=[
    {id:1,selected:false,img:Mem1,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:2,selected:false,img:Mem2,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:3,selected:false,img:Mem3,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:4,selected:false,img:Mem4,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:5,selected:false,img:Mem5,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:6,selected:false,img:Mem6,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:7,selected:false,img:Mem7,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:8,selected:false,img:Mem8,name:"Charlie Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
]

const meow=[
    {id:1,selected:false,img:Mem1,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:2,selected:false,img:Mem2,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:3,selected:false,img:Mem3,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:4,selected:false,img:Mem4,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:5,selected:false,img:Mem5,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:6,selected:false,img:Mem6,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:7,selected:false,img:Mem7,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:8,selected:false,img:Mem8,name:" Bets",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
]

const Pushper=[
    {id:1,selected:false,img:Mem1,name:"Charles Boyle",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:2,selected:false,img:Mem2,name:"Charles Boyle",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:3,selected:false,img:Mem3,name:"Charles Boyle",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:4,selected:false,img:Mem4,name:"Charles Boyle",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:5,selected:false,img:Mem5,name:"Charles Boyle",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:6,selected:false,img:Mem6,name:"Charles Boyle",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:7,selected:false,img:Mem7,name:"Charles Boyle",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
    {id:8,selected:false,img:Mem8,name:"Charles Boyle",desig:"UI Designer",skills:["After Effects","Figma","Adobe XD","Principle"],exp:"7 years",s:"colors , typography"},
]

const SelectTeam = ({handleClose,team,setTeam,num,group}) => {

    const [peeps,setPeeps]=React.useState(arr)
    const [peeps2,setPeeps2]=React.useState(meow)
    const [peeps3,setPeeps3]=React.useState(Pushper)

    React.useEffect(()=>{
        let t2=[...team[group]]
        let temp
        // let temp=[...peeps]
        if(group==='Design')
            temp=[...peeps]
        else if(group==='Development')
            temp=[...peeps2]
        else if(group==='Management')
            temp=[...peeps3]
         
        let flag
        temp.map((e)=>{
            flag=false;
            t2.map((c)=>{
                if(e.id===c.id)
                    flag=true;
            })
            flag ? e.selected=true : e.selected=false
        })

        // setPeeps(temp)
        if(group==='Design')
            setPeeps(temp)
        else if(group==='Development')
            setPeeps2(temp)
        else if(group==='Management')
            setPeeps3(temp)
    },[])

    const cardSelected =(id)=> 
    {
        let del=false
        let temp
        // let temp=[...peeps]

        if(group==='Design')
            temp=[...peeps]
        else if(group==='Development')
            temp=[...peeps2]
        else if(group==='Management')
            temp=[...peeps3]

        let t2=[...team[group]]
        let lelu=true;
        temp.map((c)=>{
            if(c.id===id)
            {
                c.selected=!c.selected
                if(c.selected===true)
                {
                    if(team[group].length<num)
                    {
                        if(t2.length!==0)
                        {
                            t2.map((e)=>{
                                if(e.id===c.id)
                                {
                                    lelu=false

                                }
                            })
                            lelu && t2.push(c)
                            lelu=true;
                        }
                        else 
                        {
                            t2.push(c)
                        }
                    }
                    else 
                    {
                        c.selected=false
                        alert(`Team limit i.e ${num} exceeded`)
                    }        
                }
                else 
                {
                    let index = t2.indexOf(c);
                    t2.splice(index,1)
                    del=true;    
                }
            }
        })
        // setPeeps(temp)
        if(group==='Design')
            setPeeps(temp)
        else if(group==='Development')
            setPeeps2(temp)
        else if(group==='Management')
            setPeeps3(temp)

        const obj={[group]:t2}
        const tempObj={...team,...obj}
        setTeam(tempObj)
        
    }

    const helper = () => 
    {
        let arr2=[]
        if(group==='Design')
        {
            peeps.map((c)=>{
                arr2.push(<Card cardSelected={cardSelected} id={c.id} key={c.id} selected={c.selected} name={c.name} desig={c.desig} desc={c.desc} skills={c.skills} exp={c.exp} s={c.s} img={c.img} />)
            })
        }
        else if(group==='Development')
        {
            peeps2.map((c)=>{
                arr2.push(<Card cardSelected={cardSelected} id={c.id} key={c.id} selected={c.selected} name={c.name} desig={c.desig} desc={c.desc} skills={c.skills} exp={c.exp} s={c.s} img={c.img} />)
            })
        }
        else if(group==='Management')
        {
            peeps3.map((c)=>{
                arr2.push(<Card cardSelected={cardSelected} id={c.id} key={c.id} selected={c.selected} name={c.name} desig={c.desig} desc={c.desc} skills={c.skills} exp={c.exp} s={c.s} img={c.img} />)
            })
        }
        return arr2
    }

    return (
        
        <div className="SelectTeam">
            <NavBoard />
            <button className="BackBtn" onClick={()=>handleClose()}>Done</button>
            <div className="content">
                <h2>Select a UI developer</h2>
                <p className="tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="TeamcardWrapper">
                <div className="Teamcard">
                    {helper()}
                    {/*peeps.map((c)=>{
                        return <Card cardSelected={cardSelected} id={c.id} key={c.id} selected={c.selected} name={c.name} desig={c.desig} desc={c.desc} skills={c.skills} exp={c.exp} s={c.s} img={c.img} />
                    })*/}
                </div>
            </div>            
        </div>
    );
};

export default SelectTeam;