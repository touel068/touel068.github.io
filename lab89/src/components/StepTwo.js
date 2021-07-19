  
import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

export default () => {
 

  return (
    <div className="allRows">
             <div className="continentTitle"><h4>Activities</h4></div>
        <div className='row'>
                <div className='six columns'>
                    <label>Triceratop ride</label>
                    <Checkbox
                    checked= {true}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='six columns'>
                    <label>Carnivore Tour</label>
                    <Checkbox/>
                </div>
            </div>

            <div className='row'>
                <div className='six columns'>
                    <label>Jungle Tour</label>
                    <Checkbox/>
                </div>
            </div>

            <div className='row'>
                <div className='six columns'>
                    <label>Gastronomic Offer</label>
                    <Checkbox checked={true}/>
                </div>
            </div>
            <div className='row'>
                <div className='six columns'>
                    <label>Unique Venues</label>
                    <Checkbox/>
                </div>
            </div>
            <div className='row'>
                <div className='six columns'>
                    <label>Private Visit</label>
                    <Checkbox/>
                </div>
            </div>
            <div className='row'>
                <div className='six columns'>
                    <label>Wedding</label>
                    <Checkbox/>
                </div>
            </div>
    </div>
  )
}