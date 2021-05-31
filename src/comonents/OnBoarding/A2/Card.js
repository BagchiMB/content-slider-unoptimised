import React from 'react';
import '../styles/Card-A2.scss'

const Card = ({title,text,img,clicked,setSelected,id}) => { 

    const handleClick = () =>
    { 
        setSelected(id) 
    }

    return (
        <div className={`Card-A2 ${clicked && 'Card-A2-selected'}`} onClick={handleClick} >
            <div className="Image" ><img src={img} alt={title} /></div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Card;