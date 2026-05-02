// src/pages/CrewMemberPage.jsx
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { crew } from "../data/crewData";

export default function CrewMemberPage() {
  const { memberId } = useParams();

  const member = crew.find(m => m.id === memberId);

  if (!member) {
    return (
      <Container className="py-5 text-center">
        <h1>Member not found</h1>
      </Container>
    );
  }

  return (
    <Container className="py-5 text-center">
      <h1>{member.name}</h1>

<div className="crew-detail-img-wrapper">
  <img
    src={member.image}
    alt={member.name}
    className="crew-detail-img"
  />
</div>

      <p className="mt-4">{member.bio}</p>

      <div className="mt-3">
        {member.tags.map(tag => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </Container>
  );
}