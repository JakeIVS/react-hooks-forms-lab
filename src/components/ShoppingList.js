import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, setItemFormChange, onItemFormChange, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchChange] = useState('')


  function handleSearchChange(e) {
    setSearchChange(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }



  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === '') {
      return true;
    } else if (selectedCategory !== "All" && search === '') {
      return item.category === selectedCategory;
    } else if (selectedCategory === "All" && search !== "") {
      return item.name.toLowerCase().includes(search.toLowerCase())
    } else if (selectedCategory !== "All" && search !== "") {
      return (item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase()))
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormChange={onItemFormChange}
      onItemFormSubmit={onItemFormSubmit}
      setItemFormChange={setItemFormChange}/>
      <Filter 
      onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
