import React from 'react';
import './styles/Next.scss'

const status=['A1','A2','A3','A4','A5','A6','A7','A8']

const Next = ({vis,T,building,goal,companyName,name,num,skill,setT,setTransition,stack,start,team}) => {

    const [completion,setCompletion]=React.useState(1)

    React.useEffect(()=>{
        if(T==='A1')
            setCompletion(1)
        else if(T==='A2')
            setCompletion(2)
        else if(T==='A3')
            setCompletion(3)
        else if(T==='A4')
            setCompletion(4)
        else if(T==='A5')
            setCompletion(5)
        else if(T==='A6')
            setCompletion(6)
        else if(T==='A7')
            setCompletion(7)
        else if(T==='A8')
            setCompletion(8)
    },[T])

    const dis = () =>
    {
        if(T==='A1')
            return building===''
        else if(T==='A2')
            return goal===''
        else if(T==='A3')
            return companyName==='' || name===''
        else if(T==='A4')
            return num==='' || skill===''
        else if(T==='A5')
            return stack.Client==='' || stack.Backend==='' || stack.Database==='' || stack.Services==='' 
        else if(T==='A6')
            return start===null
        else if(T==='A7')
            return team.Design.length !== num || team.Management.length !== num || team.Development.length !== num 
        else if(T==='A8')
            return false
    }

    const handleNext = () => 
    {
        setTransition('slideIn')
        setT(status[status.indexOf(T)+1]) 
    }
    const handlePrev = () => 
    {
        setTransition('slideOut')
        setT(status[status.indexOf(T)-1])
    }

    return (
        <div className="Next">
            <div className="Next-btn-wrapper">
                <div className="Next-btn" style={{width:vis?'100%':'80%'}}>
                    {vis&&<button onClick={handlePrev} className="prev-btn"><span className="text">Previous Step</span> <span className="lt"> &lt; </span></button>}
                    <button onClick={handleNext} className="next-btn" disabled={dis()} style={{width:vis?'50%':'100%',cursor:dis()?'not-allowed':'pointer'}}><span className="text">{T!=='A8'?'Next Step':'Finish'}</span> <span className="gt"> &gt; </span></button>
                </div>
            </div>
            <div className="Progress-bar">
                <div className="Bar"><div className="Remain" style={{width:`calc(${8-completion}/8*100%)`}}></div></div>
                <div className="Progress">{completion}/8</div>
            </div>
        </div>
    );
};

export default Next;