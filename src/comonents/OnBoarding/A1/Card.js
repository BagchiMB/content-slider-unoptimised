import React from 'react';
import '../styles/Card-A1.scss'
import Bg from '../../../assets/img/BgBuild.png'


const Card = ({title,text,img,name,clicked,setSelected,id}) => {


    const handleClick = () =>
    { 
        setSelected(id) 
    }

    return (
        <div className="Card-A1" onClick={handleClick} style={{backgroundImage:clicked?`url(${Bg})`:``,border:clicked?`3px solid transparent`:''}}>
            <div className="Image" style={{backgroundColor:clicked?'#fff':''}}><img className={name} src={img} alt={title} /></div>
            <h3 style={{color:clicked?`#fff`:``}}>{title}</h3>
            <p style={{color:clicked?`#fff`:``}}>{text}</p>
        </div>
    );
};

export default Card;