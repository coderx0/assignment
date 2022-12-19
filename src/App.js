import { useEffect, useState } from 'react';
import './App.css';
import RowComp from './components/rowComp';
import {nanoid} from 'nanoid';


function App() {
  const [rows,setRows] = useState([
    {
      id:1,
      accountType:"others",
      debitAmount:0,
      creditAmount:0
    },
    {
      id:2,
      accountType:"others",
      debitAmount:0,
      creditAmount:0
    },
    {
      id:3,
      accountType:"others",
      debitAmount:0,
      creditAmount:0
    },])

    const [totalDebit,setTotalDebit] = useState(0);
    const [totalCredit,setTotalCredit] = useState(0);

  const removeRow = (id)=>{
    setRows(prev=>prev.filter(elem=>elem.id!==id));
  };

  const addRow = ()=>{
    const id = nanoid();
    setRows(prev=>[...prev,{id:id,accountType:'others',debitAmount:0,creditAmount:0}]);
  }

  useEffect(()=>{
    let totDebit=0;
    let totCredit=0;

    for(let i=0;i<rows.length;i++){
      totDebit+=parseFloat(rows[i].debitAmount);
      totCredit+=parseFloat(rows[i].creditAmount);
    }

    setTotalDebit(totDebit);
    setTotalCredit(totCredit);
  },[rows])

  const onDebitChange = (id,amount)=>{
    const updatedData = rows.map(data=>{
      let value = {...data};
      if(data.id === id){
        value.debitAmount = amount;
      }
      return value;
    })
    setRows(updatedData);
  }

  const onCreditChange = (id,amount)=>{
    const updatedData = rows.map(data=>{
      let value = {...data};
      if(data.id === id){
        value.creditAmount = amount;
      }
      return value;
    })
    setRows(updatedData);
  }

  const onAccountTypeChange = (id,accountType)=>{
    const updatedData = rows.map(data=>{
      let value = {...data};
      if(data.id === id){
        value.accountType =accountType;
      }
      return value;
    })
    setRows(updatedData);
  }
  return (
    <div className = 'overflow-hidden bg-stone-200 w-screen h-screen flex justify-center items-center'>
      <div className='bg-white '>
      <div className='flex gap-1 px-12 pt-12 pb-2 font-semibold text-lg'>
        <h1 className='rounded-md bg-stone-200 text-black p-4 w-72 text-center'>Accounts</h1>
        <h1 className='rounded-md bg-stone-200 text-black p-4 w-48 text-center'>Debit Amount</h1>
        <h1 className='rounded-md bg-stone-200 text-black p-4 w-48 text-center'>Credit Amount</h1>
      </div>
      {
        rows.map((elem)=>
        <RowComp
        onCreditChange={onCreditChange}
        onDebitChange={onDebitChange}
        onAccountTypeChange={onAccountTypeChange}
        key={elem.id} 
        rowId={elem.id} 
        removeRow={removeRow}/>)
      }
      <div className='flex gap-1 px-12 pt-2 pb-2 font-semibold text-md'>
      <div className='flex w-72'>
      <div className='flex-1 w-60 cursor-pointer text-blue-700 font-bold' onClick={addRow}>+ Add More</div>
      <h1 className='text-black'>Total</h1>
      </div>
      <h1 className=' text-black pl-4 w-48 text-right'>{Number.isInteger(totalDebit)?totalDebit.toLocaleString('hi-IN')+'.00' :totalDebit.toLocaleString('hi-IN')}</h1>
      <h1 className=' text-black pl-4 w-48 text-right'>{Number.isInteger(totalCredit)?totalCredit.toLocaleString('hi-IN')+'.00':totalCredit.toLocaleString('hi-IN')}</h1>
      </div>
      </div>
    </div>
  );
}

export default App;
