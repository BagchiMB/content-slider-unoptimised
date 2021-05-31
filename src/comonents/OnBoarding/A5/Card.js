import React from 'react';
import Select from 'react-select';
import '../styles/Card-A5.scss'

const Card = ({title,val,handleChange,options}) => {
    return (
        <div className="Card-A5">
            <p>{title}</p>
            <Select
                value={val}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
};

export default Card;