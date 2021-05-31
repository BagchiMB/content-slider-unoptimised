import React from 'react';
import '../styles/Card-A4.scss'

const Card = ({title,img,clicked,setSelected,id}) => {

    const handleClick = () =>
    { 
        setSelected(id) 
    }

    return (
        <div className={`Card-A4 ${clicked && 'Card-A4-selected'}`} onClick={handleClick}>
            <div className="Image" ><img src={img} alt={title} /></div>
            <h3>{title}</h3>
        </div>
    );
};

export default Card;