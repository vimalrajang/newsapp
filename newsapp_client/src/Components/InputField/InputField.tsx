import React from 'react'
import {Input} from '../../Css/styledComponents'

function InputField(props:any) {
    return (
        <React.Fragment>
            <Input type={props.InputType} data-testid={props.id} name={props.StateName} id={props.id} placeholder={props.PlaceHolder} />
        </React.Fragment>
    )
}

export default InputField