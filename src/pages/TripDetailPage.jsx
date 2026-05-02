import { useParams, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { getEntryById, tripData } from '../data/tripData';

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

export default function TripDetailPage() {
  const { id } = useParams();
  const entry = getEntryById(id);
  const currentIndex = tripData.entries.findIndex(e => e.id === parseInt(id));
  const prevEntry = currentIndex > 0 ? tripData.entries[currentIndex - 1] : null;
  const nextEntry = currentIndex < tripData.entries.length - 1 ? tripData.entries[currentIndex + 1] : null;

  if (!entry) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Entry not found</h2>
          <p>The journal entry you're looking for doesn't exist.</p>
          <Link to="/" className="home-button" style={{ display: 'inline-flex' }}>
            Return to Journal
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container className="trip-detail-page">
      {/* Photo Frame */}
      <div className="photo-frame">
        <div className="photo-frame-inner">
          <img 
            src={entry.image} 
            alt={entry.title}
            className="detail-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800';
            }}
          />
        </div>
        <div className="photo-caption">{entry.location}</div>
      </div>

      {/* Title Section */}
      <div className="detail-header">
        <div className="detail-date">{entry.date}</div>
        <h1 className="detail-title">{entry.title}</h1>
        <div className="detail-location">
          <span className="mood-emoji">{moodEmojis[entry.mood] || '📍'}</span>
          {entry.location}
        </div>
      </div>

      {/* Tags */}
      <div className="detail-tags">
        {entry.tags.map((tag, index) => (
          <span key={index} className="detail-tag">{tag}</span>
        ))}
      </div>

      {/* Content */}
      <div className="detail-content">
        {entry.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Navigation */}
      <div className="detail-navigation">
        <div className="nav-arrow left">
          {prevEntry ? (
            <Link to={`/entry/${prevEntry.id}`} className="nav-link">
              <span className="arrow">←</span>
              <div className="nav-preview">
                <span className="nav-label">Previous</span>
                <span className="nav-title">{prevEntry.title}</span>
              </div>
            </Link>
          ) : (
            <span className="nav-link disabled"></span>
          )}
        </div>
        
        <Link to="/" className="home-button">
          ✦
        </Link>
        
        <div className="nav-arrow right">
          {nextEntry ? (
            <Link to={`/entry/${nextEntry.id}`} className="nav-link">
              <div className="nav-preview">
                <span className="nav-label">Next</span>
                <span className="nav-title">{nextEntry.title}</span>
              </div>
              <span className="arrow">→</span>
            </Link>
          ) : (
            <span className="nav-link disabled"></span>
          )}
        </div>
      </div>
    </Container>
  );
}