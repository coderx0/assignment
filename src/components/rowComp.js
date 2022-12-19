import React from 'react'
import DropdownMenu from './dropdownMenu'
import CurrencyInput from 'react-currency-input-field';

const RowComp = ({rowId,removeRow,onDebitChange,onCreditChange,onAccountTypeChange}) => {

  return (
    <div className='my-1 flex gap-1 px-12 font-semibold text-xl items-center'>
        <div className='rounded-md w-72 h-12'>
          <DropdownMenu rowId={rowId} onAccountTypeChange={onAccountTypeChange}/>
        </div>

        <div className='rounded-md bg-stone-300  w-48 h-12 flex justify-center items-center'>
        <CurrencyInput
  id="debitInput"
  name="debitAmount"
  placeholder="0"
  defaultValue={0}
  decimalsLimit={2}
  onValueChange={(value, name) =>{
    value = value===undefined?0:value;
    onDebitChange(rowId,value)
  } }
  className='w-full h-full rounded-md px-2 text-white text-right'
/>
        </div>

        <div className='rounded-md bg-stone-300  w-48 h-12 flex justify-center items-center'>
        <CurrencyInput
  id="creditInput"
  name="creditAmount"
  placeholder="0"
  defaultValue={0}
  decimalsLimit={2}
  min={0}
  onValueChange={(value, name) =>{ 
    value = value===undefined?0:value;
  onCreditChange(rowId,value)}}
  className='w-full h-full rounded-md px-2 text-white text-right'
/>
        </div>

        <div className='rounded-md cursor-pointer w-8 h-8 flex justify-center items-center p-2'
        onClick={()=>removeRow(rowId)}>
          <img src='/deleteIcon.png' alt='delete icon'/>
        </div>

      </div>
  )
}

export default RowComp