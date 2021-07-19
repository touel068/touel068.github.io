import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default () => {
    const [checked, setChecked] = useState('')

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div className="allRows">
                 <div className="continentTitle"><h4>Agreements</h4></div>
            <div className='row'>
                <div className='ten columns terms'>
                    <span>By clicking "Accept" I agree that:</span>
                    <ul className='docs-terms'>
                        <li>
                            I have read and accepted the <a href='#'>User Agreement</a>
                        </li>
                        <li>
                            I have read and accepted the <a href='#'>Privacy Policy</a>
                        </li>
                        <li>I am at least 18 years old</li>
                    </ul>
                    <label>
                        <input
                            type='checkbox'
                            //   defaultChecked={this.state.checked}
                            checked={checked}
                            onChange={e => setChecked(e.target.value)}
                            autoFocus
                        />
                        <span> Accept </span>{' '}
                    </label>
                </div>
            </div>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Submit
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Added to reservation
                </Alert>
            </Snackbar>

        </div>
    )
}