import "./sorting-component.css"

const SortingComponent = ({
  sortOption,
  setSortOption,
  visibleCount,
  totalCount
}) => {
  return (
    <div className="catalog-controls">

      <strong>
        {visibleCount} out of {totalCount} products displayed
      </strong>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="az">Name A–Z</option>
        <option value="za">Name Z–A</option>
        <option value="price-low">Price Low → High</option>
        <option value="price-high">Price High → Low</option>
      </select>

    </div>
  )
}

export default SortingComponent