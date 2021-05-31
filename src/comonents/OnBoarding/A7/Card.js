import React from 'react';
import '../styles/PersonCard.scss'

const Card = ({id,name,desig,desc,skills,exp,s,img,selected,cardSelected}) => {
    return (
        <div onClick={()=>cardSelected(id)} className={`PersonCard ${selected && 'selected-PersonCard'}`}>
            <img src={img} alt="Profile Picture" />
            <div>
                <h3>{name}</h3>
                <p className="desig">{desig}</p>
                <p className="desc">{desc}</p>
                <p className="skillsets">Skillsets</p>
                <div className="skills">
                    {skills.map((s)=><p key={s}>{s}</p>)}
                </div>
                <p className="LastCol"><span className="Ask">years in industry</span><span className="Tell">{exp}</span></p>
                <p className="LastCol"><span className="Ask">strengths</span><span className="Tell">{s}</span></p>
            </div>
        </div>
    );
};

export default Card;