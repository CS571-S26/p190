// src/pages/ItineraryPage.jsx

import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { itineraryData } from "../data/itineraryData";

export default function ItineraryPage() {
  return (
    <Container className="py-5">
      <section className="text-center mb-5">
        <p className="eyebrow-text">Sueños 2026</p>
        <h1 className="page-title">Trip Itinerary</h1>
        <p className="page-subtitle">
          A little plan for the chaos, memories, music, and late nights.
        </p>
      </section>

      <Row className="g-4">
        {itineraryData.map((item) => (
          <Col key={item.title} xs={12} md={6} lg={4}>
            <Card className="itinerary-card h-100">
              <Card.Body>
                <p className="itinerary-day">{item.day} • {item.date}</p>
                <Card.Title>{item.title}</Card.Title>
                <p className="itinerary-location">{item.location}</p>
                <p className="itinerary-mood">Mood: {item.mood}</p>

                <ul className="itinerary-list">
                  {item.plans.map((plan) => (
                    <li key={plan}>{plan}</li>
                  ))}
                </ul>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag) => (
                    <Badge key={tag} bg="warning" text="dark">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}