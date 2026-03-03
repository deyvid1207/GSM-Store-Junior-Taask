import { useState } from "react"
import "./filter-component.css"

const FilterComponent = ({
  availableColors,
  selectedColors,
  setSelectedColors,
  maxPrice,
  setMaxPrice,
  colorCounts,
  discountOnly,
  setDiscountOnly
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`filter-wrapper ${isOpen ? "open" : ""}`}>
    
      <button
        type="button"
        className="filter-toggle"
        onClick={() => setIsOpen(prev => !prev)}
      >
        Filters {isOpen ? "▲" : "▼"}
      </button>

      <aside className="filter-panel">
        <h3>Filter by Color</h3>

        {availableColors.map(color => (
          <label key={color} className="filter-option">
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => {
                setSelectedColors(prev =>
                  prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
                )
              }}
            />
            {color} ({colorCounts[color] || 0})
          </label>
        ))}

        <h3>Max Price: {maxPrice}€</h3>
        <input
          type="range"
          min="0"
          max="300"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />

        <h3>Discounted</h3>
        <label className="filter-option">
          <input
            type="checkbox"
            checked={discountOnly}
            onChange={() => setDiscountOnly(prev => !prev)}
          />
          On Sale 
        </label>
      </aside>
    </div>
  )
}

export default FilterComponent