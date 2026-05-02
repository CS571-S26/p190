// src/pages/CrewPage.jsx
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { crew } from "../data/crewData";

export default function CrewPage() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="section-title">SSRI Crew</h1>
        <p className="section-subtitle">
          Meet the people making Sueños 2026 unforgettable.
        </p>
      </div>

      <Row>
        {crew.map(member => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={member.id}>
            <div className="fade-in">
            <Link to={`/crew/${member.id}`} className="crew-card-link">
              <div className="crew-card">
                <img
  src={member.image}
  alt={member.name}
  className="crew-img"
/>

                <h3>{member.name}</h3>
                <p>{member.bio}</p>

                <div>
                  {member.tags.map(tag => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}