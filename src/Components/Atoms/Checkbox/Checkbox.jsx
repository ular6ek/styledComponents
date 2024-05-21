import React from 'react'
import { CheckboxContainer, CheckboxInput, CheckboxLabel, CheckboxRadio } from './styled'
import CheckboxIcon from '../../../Assets/Icons/CheckboxIcon'

export default function Checkbox({id}) {
  return (
   <CheckboxContainer>
        <CheckboxInput id={id} type='checkbox'/>
        <CheckboxLabel htmlFor={id}>
            <CheckboxRadio>
                <CheckboxIcon/>
            </CheckboxRadio>
        </CheckboxLabel>
   </CheckboxContainer>
  )
}
