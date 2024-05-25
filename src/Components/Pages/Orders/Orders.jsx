import React, { useEffect, useState } from "react";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import { BlockContainer } from "../../../Base/styled";
import Tabs from "../../Molecules/Tabs/Tabs";
import { TABS_LIST, ordersList } from "./const";
import Table from "../../Molecules/Table/Table";
import Search from "../../Atoms/Search/Search";
import CustomDataPicker from "../../Atoms/CustomDatePicker/CustomDataPicker";
import FilterButton from "../../Atoms/FilterButton/FilterButton";

export default function Orders() {
  const [tabsList, setTabslist] = useState(TABS_LIST);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(ordersList);
  const [inFilter, setInFilter] = useState(false)

  useEffect(() => {
    searchByTitle(search);
  }, [search]);

  const setTab = (id) => {
    const data = tabsList.map((tab) => {
      tab.id === id ? (tab.active = true) : (tab.active = false);
      return tab;
    });
    setTabslist(data);
    SearchByStatus(id)
  };

  const SearchByStatus = (id) => {
    const sendData = ordersList.filter(item => {
      console.log(item.status.toLocaleLowerCase() === id, item.status.toLocaleLowerCase())
      return id === "all" ? item : item.status.toLocaleLowerCase() === id.toLocaleLowerCase()
    })
    setData(sendData)
  }

  const searchByTitle = (title) => {
    const senData = ordersList.filter((item) =>
      item.title.toLocaleLowerCase().trim().includes(title.toLocaleLowerCase().trim())
    );
    setData(senData);
  };

  return (
    <MainTemplate title="Orders">
      <BlockContainer>
        <Tabs list={tabsList} setTab={setTab} />
        <Search value={search} setValue={setSearch} />
        <CustomDataPicker data={ordersList}  setData={setData} />
        <FilterButton active={inFilter} setFilter={setInFilter} />
        <Table data={data} />
      </BlockContainer>
    </MainTemplate>
  );
}
