import React, { useState } from 'react'
import CreditCardInput from 'react-credit-card-input';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

export default () => {
    const [cardNumber, setCardNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCVC] = useState('')

    return (
        <div className="allRows">
                 <div className="continentTitle"><h4>Payment</h4></div>
            <CreditCardInput
                cardNumberInputProps={{ value: cardNumber, onChange: e => setCardNumber(e.target.value) }}
                cardExpiryInputProps={{ value: expiry, onChange: e => setExpiry(e.target.value) }}
                cardCVCInputProps={{ value: cvc, onChange: e => setCVC(e.target.value) }}
                fieldClassName="input"
            />
            <Tooltip title="Payment information is needed in case of a no show">
                <IconButton aria-label="Payment information is needed in case of a no show">
                    <HelpIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}