import React, { useState } from 'react'

const categories = [{name:"Savings"},{name:'Current'},{name:'RD'}]

const DropdownMenu = ({onAccountTypeChange,rowId}) => {

  const [category,setCategory] = useState(false);

  return (
    <div className='relative h-full'>
      <select
                onChange={(e) => {
                  onAccountTypeChange(rowId,e.target.value);
                  setCategory(e.target.value);
                }}
                className="outline-none p-2 text-[15px] bg-stone-700 rounded-md cursor-pointer w-full h-full"
              >
                <option value="others" className="bg-stone-700">Select Account</option>
                {categories.map((category) => (
                  <option
                    className=" border-0  text-white outline-none capitalize bg-stone-900"
                    key={category.name}
                    value={`${category.name}`}>
                    {category.name}
                  </option>
                ))}
              </select>
    </div>
  )
}

export default DropdownMenu