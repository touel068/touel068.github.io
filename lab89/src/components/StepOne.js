import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';


export default () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nTickets, setnTickets] = useState('')
    const [date, setDate] = useState('')
    const [email, setEmail] = useState('')

    return (
        
        <div className="allRows">
             <div className="continentTitle"><h4>Basic informaation</h4></div>
            <div className='row'>
                <div className='six columns'>

                    <TextField
                        id="ntickets"
                        label="number of tickets"
                        type="number"
                        onChange={e => setnTickets(e.target.value)}
                        value={nTickets}
                        variant="filled"
                        color="secondary"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='six columns'>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        variant="filled"
                        color="secondary"
                        value={date}
                        onChange ={e => setDate(e.target.value)}
                        defaultValue="2021-07-18"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='six columns'>

                    <TextField
                        id="fn"
                        label="First Name"
                        type="text"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        variant="filled"
                        color="secondary"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='six columns'>

                    <TextField
                        id="ln"
                        label="Last Name"
                        type="text"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        variant="filled"
                        color="secondary"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='six columns'>
                    <TextField
                        id="standard-number"
                        label="Email"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        variant="filled"
                        color="secondary"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>

        
        </div>
    )
}