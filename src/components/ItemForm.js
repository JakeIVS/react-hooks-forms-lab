import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit }) {
  const [itemFormChange, setItemFormChange] = useState({
    name:null,
    category:"Produce"
  })

  function handleItemFormChange(e) {
    const name =  e.target.name
    let value = e.target.value
    setItemFormChange({
      ...itemFormChange,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      id:uuid(),
      ...itemFormChange
    })
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemFormChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
