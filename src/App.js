import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  
  let [menuItems,setMenuItems] = useState(items)
  const allCategories = ['all', ...new Set(items.map((item) => item.category))];
  let [categories,setCategories] = useState(allCategories)
  
  function filterItems(category){
    if(category === 'all'){
      setMenuItems(items)
      return ;
    }
      let newMenuItems = items.filter((item)=>item.category===category)
      setMenuItems(newMenuItems)
 
  }

  return <main>
    <section className='menu section'>
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories allCategories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>;
}

export default App;
