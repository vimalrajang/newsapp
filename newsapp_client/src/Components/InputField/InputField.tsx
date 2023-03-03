import React from 'react'
import {Input} from '../../Css/styledComponents'

function InputField(props:any) {
    return (
        <React.Fragment>
            <Input onChange={e => props.handleChange(e)} type={props.inputType} value={props.stateValue} data-testid={props.id} name={props.stateName} id={props.id} placeholder={props.placeHolder} />
        </React.Fragment>
    )
}

export default InputField