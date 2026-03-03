import { useState, useMemo } from "react"
import data from "../../../../data/data.json";
import ProductCard from "../ProductCard/product-card.jsx"
import "./catalog.css"
   import SliderComponent from "../../slider/slider-component.jsx"
   import FilterComponent from "../Filter/filter-component.jsx"
import SortingComponent from "../Sorting/sorting-component.jsx"
const PRODUCTS_PER_PAGE = 20

const CatalogComponent = (catalogcategory) => {
const [discountOnly, setDiscountOnly] = useState(false)
  const category = catalogcategory.category;
 const [selectedColors, setSelectedColors] = useState([])
const [maxPrice,  setMaxPrice] = useState(1000)
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE)
  const [sortOption, setSortOption] = useState("default")
   console.log(catalogcategory)
 

const slides = [
  "/sliders/slider-fixed-placeholder.jpg",
  "/sliders/slider-fixed-placeholder.jpg",
  "/sliders/slider-fixed-placeholder.jpg",
  
]
   const colorCounts = useMemo(() => {
  const counts = {}

  category.products.forEach(product => {
    const effectivePrice = product.discountedPrice ?? product.price

    if (effectivePrice <= maxPrice) {
      counts[product.color] = (counts[product.color] || 0) + 1
    }
  })

  return counts
}, [category.products, maxPrice])
const filteredProducts = useMemo(() => {
  return category.products.filter(product => {
    const effectivePrice = product.discountedPrice ?? product.price

    const matchesColor =
      selectedColors.length === 0 ||
      selectedColors.includes(product.color)

    const matchesPrice =
      effectivePrice <= maxPrice

    const matchesDiscount =
      !discountOnly || product.discountedPrice != null

    return matchesColor && matchesPrice && matchesDiscount
  })
}, [category.products, selectedColors, maxPrice, discountOnly])
const sortedProducts = useMemo(() => {
  const productsCopy = [...filteredProducts]

  switch (sortOption) {
    case "az":
      return productsCopy.sort((a, b) =>
        a.name.localeCompare(b.name)
      )

    case "price-low":
      return productsCopy.sort(
        (a, b) =>
          (a.discountedPrice ?? a.price) -
          (b.discountedPrice ?? b.price)
      )
         case "price-low":
      return productsCopy.sort(
        (a, b) =>
          (a.discountedPrice ?? a.price) -
          (b.discountedPrice ?? b.price)
      )
       case "za":
        return productsCopy.sort((a, b) =>
          b.name.localeCompare(a.name)
        )
 case "price-high":
        return productsCopy.sort(
          (a, b) =>
            (b.discountedPrice ?? b.price) -
            (a.discountedPrice ?? a.price)
        )
    default:
      return productsCopy
  }
}, [filteredProducts, sortOption])
const availableColors = [
  ...new Set(category.products.map(p => p.color))
]
  const visibleProducts = sortedProducts.slice(0, visibleCount)

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + PRODUCTS_PER_PAGE)
  }

 return (
  <div className="catalog-container">

  
    <section className="category-header">
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </section>
  <SliderComponent slides={slides} />
    <div className="catalog-layout">

     
 <FilterComponent
  availableColors={availableColors}
  selectedColors={selectedColors}
  setSelectedColors={setSelectedColors}
  maxPrice={maxPrice}
  setMaxPrice={setMaxPrice}
  colorCounts={colorCounts}
  discountOnly={discountOnly}
  setDiscountOnly={setDiscountOnly}
/>


 
      <div className="product-section">

        
  <SortingComponent
  sortOption={sortOption}
  setSortOption={setSortOption}
  visibleCount={visibleProducts.length}
  totalCount={sortedProducts.length}
/>

 
        <div className="product-grid">
          {visibleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
 
        {visibleCount < sortedProducts.length && (
          <div className="load-more-container">
            <button onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}

      </div>

    </div>
  </div>
)
}

export default CatalogComponent