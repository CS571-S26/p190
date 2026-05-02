import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const moodEmojis = {
  excited: '✨',
  wonderful: '🌟',
  delighted: '💫',
  relaxed: '🌊',
  peaceful: '🕊️',
  serene: '💙',
  joyful: '🎉',
  amazed: '🤩',
  romantic: '💕',
  content: '☕',
  adventurous: '🌿',
  grateful: '🙏',
  inspired: '💡',
  sophisticated: '🎭',
  humbled: '🌺',
  celebratory: '🎊'
};

export default function TripCard({ entry }) {
  return (
    <Link to={`/entry/${entry.id}`} className="trip-card-link">
      <Card className="trip-card h-100">
        <div className="trip-card-image-wrapper">
          <Card.Img 
            variant="top" 
            src={entry.image} 
            alt={entry.title}
            className="trip-card-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800';
            }}
          />
          <div className="trip-card-overlay">
            <span className="mood-emoji">{moodEmojis[entry.mood] || '📍'}</span>
          </div>
        </div>
        
        <Card.Body className="trip-card-body">
          <div className="trip-card-date">{entry.date}</div>
          <Card.Title className="trip-card-title">{entry.title}</Card.Title>
          <div className="trip-card-location">📍 {entry.location}</div>
          <Card.Text className="trip-card-excerpt">
            {entry.excerpt}
          </Card.Text>
          <div className="trip-card-tags">
            {entry.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="trip-tag">
                {tag}
              </span>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}