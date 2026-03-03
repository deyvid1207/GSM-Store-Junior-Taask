import { useState, useEffect } from "react"
import "./slider.css"

const SliderComponent = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  
  useEffect(() => {
    if (!slides || slides.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev === slides.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [slides])

  if (!slides || slides.length === 0) return null

  return (
    <div className="slider">

    
      <div
        className="slides-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

    </div>
  )
}

export default SliderComponent