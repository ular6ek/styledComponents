import React from 'react'
import { FilterButtonStyled, FilterIconStyled, FilterText } from './styled'
import FiterIcon from '../../../Assets/Icons/FiterIcon'

export default function FilterButton({active, setFilter}) {

  return (
    <FilterButtonStyled>
        <FilterIconStyled active={String(active)}>
            <FiterIcon />
        </FilterIconStyled>
        <FilterText active={String(true)}>Filter</FilterText>
    </FilterButtonStyled>
  )
}
