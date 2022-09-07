import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import React, { useState, useEffect } from 'react';
import "rsuite-table/dist/css/rsuite-table.css";

let initialData = [
  {
    date: '2022-8-9',
    coin: 'bitcoin',
    amount: '1',
    buy_price: '22940',
    invested: '22940',
    notes: ''
  },
  {
    date: '2022-8-10',
    coin: 'bitcoin',
    amount: '1',
    buy_price: '23200',
    invested: '23200',
    notes: ''
  },
  {
    date: '2022-8-11',
    coin: 'ethereum',
    amount: '10',
    buy_price: '1800',
    invested: '18000',
    notes: 'eth merge generating so much hype'
  },
];
function RsuiteTable({assets, portfolio, transactions}) {
  const [dataList, setDataList] = useState(() => initialData);
  // console.log(transactions);
  useEffect(()=> {
    //setDataList to hold all current transactions plus any new transactions added
    setDataList([...initialData].concat(transactions))
    }, [transactions])
  // console.log(dataList);

  return (
    <Table data={dataList} height={400}>
      <Column width={200} align="center" fixed resizable>
        <HeaderCell>Transaction Date</HeaderCell>
        <Cell dataKey="date" />
      </Column>
      <Column width={100} align="center" fixed resizable>
        <HeaderCell>Coin</HeaderCell>
        <Cell dataKey="coin" />
      </Column>
      <Column width={100} align="center" fixed resizable >
        <HeaderCell>Amount</HeaderCell>
        <Cell dataKey="amount" />
      </Column>
      <Column width={100} align="center" fixed resizable >
        <HeaderCell>Buy Price</HeaderCell>
        <Cell dataKey="buy_price" />
        {/* need an API call in this cell */}
      </Column>
      <Column width={200} align="center" fixed resizable >
        <HeaderCell>USD Invested</HeaderCell>
        <Cell dataKey="invested"/>
      </Column>
      <Column width={800} align="center" fixed resizable>
        <HeaderCell>Notes</HeaderCell>
        <Cell dataKey="notes"/>
      </Column>
    </Table>
  )
}

export default RsuiteTable;