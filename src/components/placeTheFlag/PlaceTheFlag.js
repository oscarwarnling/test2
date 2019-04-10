import React from 'react'
import "../css/style.css"
import "../css/nameTheFlag.css"
import MapsTest from '../nameTheCountry/mapsTest'
import {Link} from "react-router-dom";



const Selection = () => {
    return (
        <div className="container main">

            <div className='row returnButton'>
                <div className="col-md-3">
                    <Link to='/'>
                    <button type="button" className="btn btn-danger">Return</button>
                    </Link>
                </div>
                <div className='title col-md-6'>

<MapsTest />
                </div>
                <div className="col-md-3"></div>
            </div>


        </div>
    )
}

export default Selection;
