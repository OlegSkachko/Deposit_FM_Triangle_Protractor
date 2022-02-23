import React, { FC } from 'react';
import './index.css'
import angleABC from './../../img/angleABC.svg';
import angleBAC from './../../img/angleBAC.svg';
import angleBCA from './../../img/angleBCA.svg';
import { IResult } from '../types/types';


const Result: React.FC<IResult> = (props: IResult) => {

    return (
        <div className="main">
            <div className='main__result'>
                <div className="result__contain">
                    <div className="result__contain inp">
                        <img src={angleABC}  alt="angleABC" />
                        <button 
                            className={props.resultAngleABC === '60' ? 'green' : 'red'}
                        >
                            {props.resultAngleABC}
                        </button>
                    </div>
                    <div className="result__contain inp">
                        <img src={angleBAC} alt="angleBAC" />
                        <button 
                            className={props.resultAngleBAC === '60' ? 'green' : 'red'}
                        >
                            {props.resultAngleBAC}
                        </button>
                    </div>
                    <div className="result__contain inp">
                        <img src={angleBCA} alt="angleBCA" />
                        <button 
                            className={props.resultAngleBCA === '60' ? 'green' : 'red'}
                        >
                            {props.resultAngleBCA}
                        </button>
                    </div>
                </div>
                <div className='result__btn'>
                    <button className="result__btn-contain" onClick={props.onClick}>Redo</button>
                </div> 
            </div>
        </div> 
    );
};

export default Result;