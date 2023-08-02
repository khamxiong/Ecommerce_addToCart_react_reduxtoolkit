import React from 'react';
import { spinner } from '../../utils/images';
import "./Loader.scss";

 export const Loader = () => {
  return (
    <div className='container'>
        <div className = "flex flex-center loader">
            <img src = {spinner} alt = "loader" />
        </div>
    </div>
  )
}

