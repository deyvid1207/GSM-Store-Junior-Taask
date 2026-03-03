import './App.css'
import FooterComponent from './components/layout/Footer/footer'
import CatalogComponent from './components/catalog/Catalog/catalog'
import HeaderComponent from './components/layout/Header/header'
import { useState } from 'react'
import data from "../data/data.json";
function App() {
    const [selectedCategoryId, setSelectedCategoryId] = useState(
    data.categories[0].id
 
  )
       const selectedCategory = data.categories.find(
    c => c.id === selectedCategoryId
  )
  return (
    <>
      <HeaderComponent
        categories={data.categories}
        selectedCategoryId={selectedCategoryId}
        onCategoryChange={setSelectedCategoryId}
      />
    <CatalogComponent category={selectedCategory}/>
      <FooterComponent />
    </>
  )
}

export default App