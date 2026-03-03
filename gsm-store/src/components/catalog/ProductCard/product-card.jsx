 import "./product-card.css"
const ProductCard = ({ product }) => {
  const {
    name,
    description,
    price,
    discountedPrice,
    rating,
    image
  } = product
 const handleAddToCart = () => {
    alert("Product added to cart")
  }
  return (
    <div className="product-card">
    
      <img src={image} alt={name} />
   
      <h3>{name}</h3>
      <p>{description}</p>

      <div className="price">
        {discountedPrice ? (
          <>
            <span className="old-price">{price}€</span>
            <span className="new-price">{discountedPrice}€</span>
          </>
        ) : (
          <span>{price}€</span>
        )}
      </div>

     <div className="rating">
  {Array.from({ length: Math.floor(rating) }, (_, i) => (
    <i key={`full-${i}`} className="star full"></i>
  ))}

  {rating % 1 !== 0 && (
    <i className="star half"></i>
  )}

  {Array.from(
    { length: 5 - Math.ceil(rating) },
    (_, i) => (
      <i key={`empty-${i}`} className="star empty"></i>
    )
  )}
</div>

      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default ProductCard