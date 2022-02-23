import React from 'react';
import { IResult } from '../types/types';
import angleABC from './../../img/angleABC.svg';
import angleBAC from './../../img/angleBAC.svg';
import angleBCA from './../../img/angleBCA.svg';
import './index.css'


const InputAngles: React.FC<IResult>= (props:IResult) => {
    return (
        <div className='angle'>
            <div className="angle__item">
                <img src={angleABC}  alt="angleABC" />
                <input type="number" onChange={props.resultAngleABC}/>
            </div>
            <div className="angle__item">
                <img src={angleBAC} alt="angleBAC" />
                <input type="number" onChange={props.resultAngleBAC}/>
            </div>
            <div className="angle__item">
                <img src={angleBCA} alt="angleBCA" />
                <input type="number" onChange={props.resultAngleBCA} />
            </div>
        </div>
    );
};

export default InputAngles;