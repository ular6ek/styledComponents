import React from "react";
import { TableContainer, TableFuter, TableHeader, TableText, TableTextBlock, TableTx } from "./Styled";
import Checkbox from "../../Atoms/Checkbox/Checkbox";

export default function Table2({data}) {
  return(
   <TableContainer>
        <TableHeader>
          <TableTextBlock>
           <TableText></TableText>
           <TableText>Customer name</TableText>
           <TableText>Email</TableText>
           <TableText>Location</TableText>
           <TableText>Orders</TableText>
           <TableText>Spent</TableText>
          </TableTextBlock>
        </TableHeader>
        <TableFuter>
         {
          data.map(el => (
            <TableTextBlock>
              <TableTx>
              <Checkbox id={el.id}/>
              </TableTx>
            <TableTx>{el.title}</TableTx>
            <TableTx>{el.email}</TableTx>
            <TableTx>{el.location}</TableTx>
            <TableTx>{el.orders}</TableTx>
            <TableTx>{el.price}</TableTx>
          </TableTextBlock>
           ))
         }
        </TableFuter>
  </TableContainer>

  );
}
