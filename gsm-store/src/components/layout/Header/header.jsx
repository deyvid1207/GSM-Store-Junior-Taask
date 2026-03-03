import "./header.css"

const HeaderComponent = ({ categories, selectedCategoryId, onCategoryChange }) => {
  return (
    <header className="header">
      <div className="header-container">

     
        <div className="logo">
          GSM STORE
        </div>

   
        <nav className="navigation">
          {categories.map(category => (
            <button
              key={category.id}
              className={`nav-link ${
                selectedCategoryId === category.id ? "active" : ""
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </nav>

      </div>
    </header>
  )
}

export default HeaderComponent