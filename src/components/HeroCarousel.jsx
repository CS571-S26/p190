import { useEffect, useState } from "react";
import "./HeroCarousel.css";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1600&q=80",
    caption: "Teotihuacan, Mexico"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?w=1600&q=80",
    caption: "Cartagena, Colombia"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1600&q=80",
    caption: "Buenos Aires, Argentina"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d9?w=1600&q=80",
    caption: "Lake Atitlán, Guatemala"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1600&q=80",
    caption: "Rio de Janeiro, Brazil"
  }
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay" />
          {slide.caption && (
            <span className="hero-caption">{slide.caption}</span>
          )}
        </div>
      ))}

      <div className="hero-content">
        <div className="hero-text-wrapper">
          <span className="hero-subtitle">Sueños 2026</span>
          <h1 className="hero-title">Que Viva la Puteria</h1>
          <p className="hero-description">
            Four months. Six countries. One unforgettable adventure through Latin America.
          </p>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active-dot" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;