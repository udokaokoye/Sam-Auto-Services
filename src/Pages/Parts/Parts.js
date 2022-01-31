import React, {useEffect} from 'react';
import './Parts.css'
const Parts = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [])
  return <div>
      <div className="coming_soon">
            <img src={require('../../Assets/comingsoon.jpg')} alt="" />
      </div>
  </div>;
};

export default Parts;
