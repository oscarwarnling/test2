import React from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
//import {Link} from "react-router-dom";
import Map from './map'
import {
    dud,
} from "react-simple-maps"

const MapsTest = () => {
    return (

        <div className="container main" >
            <h3 className='title2'>SIMPLE MAPS</h3>
            <div>
                <Map />
            </div>
        </div>
    )
}


export default MapsTest;
