import React from 'react';
import '../styles/A6.scss'
import calendar from '../../../assets/img/calendar-alt.png'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const time=["Today","3 more days","1-2 weeks","Select a particular date"]
const A6 = ({transition,setStart,start}) => {

    const [selected,setSelected]=React.useState(null)

    const [startDate, setStartDate] = React.useState(null);
    const [specialBorder,setSpecialBorder]=React.useState(false)

    React.useEffect(()=>{
        if(start!==null)
        {
            if(moment(start).format('LL')===moment().format('LL'))
            {
                setSelected(time[0])

            }
            else if(moment(start).format('LL')===moment().add(3,'days').format('LL'))
                setSelected(time[1])
            else if(moment(start).format('LL')===moment().add(1,'weeks').format('LL'))
                setSelected(time[2])
            else 
            {
                setSelected(time[3])
                setStartDate(start)
                setSpecialBorder(true)
            }
        }
    },[])

    const handleClick = (val) => 
    {
        if(val===time[0])
        {
            setSelected(time[0])
            setStart(moment()._d)
            setSpecialBorder(false)
            setStartDate(null)
        }    
        else if(val===time[1])
        {
            setSelected(time[1])
            setStart(moment().add(3,'days')._d)
            setSpecialBorder(false)
            setStartDate(null)
        }   
        else if(val===time[2])
        {
            setSelected(time[2])
            setStart(moment().add(1,'weeks')._d)
            setSpecialBorder(false)
            setStartDate(null)

        }    
        else if(val===time[3])
        {
            setSelected(time[3])
        }
    }
    const handleTimeChange = (date) => 
    {
        setStartDate(date)
        setSpecialBorder(true)
        setSelected(time[3])
        
    }
    React.useEffect(()=>{
        if(startDate!==null)
            setStart(startDate)
    },[startDate])

    return (
        <div className={`A6 ${transition}`}>
            <h2>When do you want to start?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="date-selection">
                <div onClick={()=>handleClick(time[0])} className={`Box ${selected===time[0] && "selected"}`}>{time[0]}</div>
                <div onClick={()=>handleClick(time[1])} className={`Box ${selected===time[1] && "selected"}`}>{time[1]}</div>
                <div onClick={()=>handleClick(time[2])} className={`Box ${selected===time[2] && "selected"}`}>{time[2]}</div>
            </div>
            <div className="datePicker">
                <div onClick={()=>handleClick(time[3])} className={`Box ${specialBorder && "selected"}`}><img src={calendar} alt="Calendar" />{startDate!== null ? moment(startDate).format("dddd, Do MMMM YYYY"):time[3]}</div>
                <DatePicker selected={startDate} onChange={handleTimeChange} />
            </div>
        </div>
    );
};

export default A6;