import { Container, Row, Col } from 'react-bootstrap';
import ImageCarousel from '../components/ImageCarousel.jsx';
import TripCard from '../components/TripCard.jsx';
import { tripData } from '../data/tripData';
import SpotifyPlayer from '../components/SpotifyPlayer';

// Slight rotations for scrapbook feel
const cardRotations = [
  '--rotation: -1deg',
  '--rotation: 0.5deg',
  '--rotation: -0.5deg',
  '--rotation: 1deg',
  '--rotation: -0.8deg',
  '--rotation: 0.8deg',
];

export default function HomePage() {
  return (
    <Container className="home-page">
      <ImageCarousel />
      {/* <SpotifyPlayer /> */}

      <div className="music-section">
        <SpotifyPlayer />
      </div>
      
      {/* Journal Header */}
      <div className="journal-header">
        <div className="journal-subtitle">Que Viva La Puteria</div>
        <p className="journal-description">{tripData.description}</p>
        <div className="journal-count">
          ✦ {tripData.entries.length} Adventures ✦
        </div>
      </div>

      {/* Trip Cards Grid */}
      <Row className="g-4 trip-cards-grid">
        {tripData.entries.map((entry, index) => (
          <Col key={entry.id} xs={12} sm={6} lg={4} className="mb-4">
            <div 
              className="card-wrapper" 
              style={{ 
                animationDelay: `${index * 0.08}s`,
                ...{ [cardRotations[index % cardRotations.length].split(': ')[0]]: cardRotations[index % cardRotations.length].split(': ')[1] }
              }}
            >
              <TripCard entry={entry} />
            </div>
          </Col>
        ))}
      </Row>

      {/* Journal Footer */}
      <div className="journal-footer text-center">
        <div className="flourish-line">
          <span>✦</span>
          <hr />
          <span>✦</span>
        </div>
        <p className="footer-text">The end of one chapter is just the beginning of the next...</p>
      </div>
    </Container>
  );
}