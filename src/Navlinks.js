import React from 'react'
import { Link } from 'react-router-dom'
import './Navlinks.css'

function Navlinks (){
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
               <Link>Today's Deals</Link>
               <Link>Customer Services</Link>
               <Link>Gift Services</Link>
               <Link>Registry</Link>
               <Link>sell</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Navlinks
