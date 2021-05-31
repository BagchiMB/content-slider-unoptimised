import React from 'react';
import '../styles/A8.scss'
import Slider from '@material-ui/core/Slider';

const marks = [
    {
      value: 10,
      label: '$7500000',
    },
    {
      value: 50,
      label: '$10500000',
    },
    {
      value: 90,
      label: '$12500000',
    },
  ];

  function AirbnbThumbComponent(props) {
    return (
      <span {...props}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
    );
  }

const A8 = ({transition,budget,setBudget}) => {

    

    const increase = () => 
    {
      if(budget===10)
        setBudget(50)
      else if(budget===50)
        setBudget(90)
    }

    const decrease = () => 
    {
      if(budget===90)
        setBudget(50)
      else if(budget===50)
        setBudget(10)
    }

    return (
        <div className={`A8 ${transition}`}>
            <h2>Tell us your Budget Range?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="SliderWrapper">
              <div className="Slider">
                  <Slider
                      defaultValue={budget}
                      ThumbComponent={AirbnbThumbComponent}
                      aria-label="pretto slider"
                      step={null}
                      valueLabelDisplay="auto"
                      marks={marks}
                      value={budget}
                      orientation="vertical"
                      onChange={(e,val)=>setBudget(val)}
                  />
              </div>
              <div className="Marker">
                <li className={budget===90 ? "selected":"ErrRemoval"}>$12500000</li>
                <li className={budget===50 ? "selected":"ErrRemoval"}>$10500000</li>
                <li className={budget===10 ? "selected":"ErrRemoval"}>$7500000</li>
              </div>
            </div>
            <div className="SliderControl">
              <div onClick={increase} style={{cursor:budget===90 && 'no-drop'}} className="Up">+</div> 
              <div onClick={decrease} style={{cursor:budget===10 && 'no-drop'}} className="Down">-</div> 
            </div>

        </div>
    );
};

export default A8;