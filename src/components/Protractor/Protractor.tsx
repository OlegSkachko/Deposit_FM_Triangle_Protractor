import React, { useState } from 'react';
import {ReactComponent as ProtractorSVG} from './../../img/protractor.svg';
import './index.css';

const Protractor = () => {
    const [scale, setScale] = useState<number>(1)
    const [left, setLeft] = useState<string>('900px')
    const [top, setTop] = useState<string>('320px')
    const [rotate, setRotate] = useState<number>(0)
    const [rotation, setRotation] = useState<boolean>(false)
    const [currentLeft, setCurrentLeft] = useState<number>(0)
    const [currentTop, setCurrentTop] = useState<number>(0)

    function dragEndHandler (e:React.MouseEvent<HTMLOrSVGElement>) {
        e.preventDefault()
        e.stopPropagation()
        setLeft(e.clientX-100.5+'px')
        setTop(e.clientY-90+'px')
    } 

    function mouseRotation (e:React.MouseEvent<HTMLDivElement>) {
        let x = e.clientX-currentLeft
        let y = e.clientY-currentTop
        let degree = (((Math.atan(x/y)) * -1) * 180) / Math.PI
        setRotate(degree)
    } 

    function startRotate(e:React.MouseEvent<HTMLDivElement>) {
        setRotation(!rotation)
        setCurrentLeft(e.clientX)
        setCurrentTop(e.clientY)
    }

    function doMouseRotation (e:React.MouseEvent<HTMLDivElement>) {
        if(rotation) { mouseRotation(e)}
    }

    function stopRotate(e:React.MouseEvent<HTMLDivElement>) {
        setRotation(false)  
    }
   
    function scaleHandler() {
        scale === 1 ? setScale(2) : setScale(1)
    }
      
    return (
        <div className='protractor'
             draggable = {!rotation}
             onClick={stopRotate}
             onDragEnd={dragEndHandler}
             onMouseMove={doMouseRotation}
             style={{
                'transform': `rotate(${rotate}deg) scale(${scale})`,
                'top': `${top}`, 
                'left':`${left}`,
                'width': `${201*scale}px`,
                'height': `${110*scale}px`,
              }}
            >
                <ProtractorSVG id='protractor'/>
                <div className="rotater1" onMouseDown={startRotate} />
                <div className="scaler"  onClick={scaleHandler}/>
                <div className="rotater2" onMouseDown={startRotate}/>

        </div> 
    );
};

export default Protractor;