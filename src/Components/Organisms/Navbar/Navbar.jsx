import React from 'react'
import { NavbarLeft, NavbarRight, NavbarStyled, NavbarTitle } from './styled'
import { ProfileCompanyName } from '../../Molecules/ProfileRreview/styled'
import ProfilePreview from '../../Molecules/ProfileRreview/ProfilePreview'

export default function Navbar({title}) {
  return (
    <NavbarStyled>
      <NavbarLeft>
        <NavbarTitle>{title}</NavbarTitle>
      </NavbarLeft>
      <NavbarRight>
        <ProfilePreview/>
      </NavbarRight>
      
    </NavbarStyled>
  )
}
