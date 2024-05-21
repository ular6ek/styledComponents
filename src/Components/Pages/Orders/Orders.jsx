import React, { useEffect, useState } from 'react'
import MainTemplate from '../../Templates/MainTemplate/MainTemplate'
import { BlockContainer } from '../../../Base/styled'
import Tabs from '../../Molecules/Tabs/Tabs'
import { TABS_LIST, orderList } from './const'
import Table from '../../Molecules/Table/Table'
import Search from '../../Atoms/Search/Search'



export default function Orders() {
  const [tabsList , setTabslist] = useState(TABS_LIST)
  const [search , setSearch] = useState("")
  const [data , setData] = useState(orderList)
  

useEffect(()=> {
  searchByTitle(search)
},[search])




const setTab = (id)=> {
 const data = tabsList.map(tab => {
   tab.id === id ? tab.active = true : tab.active = false ; return tab
 })
 setTabslist(data)
}


const searchByTitle = (title) => {
  const senData = orderList.filter(item => item.title.toLocaleLowerCase().trim().includes(title.toLocaleLowerCase().trim( )))
  setData(senData)
}

  return (
    <MainTemplate title='Orders'>
      <BlockContainer>
          <Tabs list={tabsList} setTab={setTab}/>
          <Search value={search} setValue={setSearch}/>
            <Table  data={data}/>
      </BlockContainer>
    </MainTemplate>
  )
  
}
