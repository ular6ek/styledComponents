import React, { useEffect, useState } from "react";
import MainTemplate from "../../Templates/MainTemplate/MainTemplate";
import { BlockContainer } from "../../../Base/styled";
import Table2 from "../../Molecules/Table2/Table2";
import { customerList } from "./const";
import Search from "../../Atoms/Search/Search";

export default function Customers() {
  const [data, setData] = useState(customerList);

  

  return (
    <MainTemplate title="Customers">
      <BlockContainer>
        <Search />
        <Table2 data={data} />
      </BlockContainer>
    </MainTemplate>
  );
}
