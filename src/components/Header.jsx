import { Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { crew } from '../data/crewData';

export default function Header() {
  const location = useLocation();

  
  return (
    <header className="scrapbook-header">
      <Container>
        <Navbar expand="md" className="p-0">
          <Navbar.Brand as={Link} to="/" className="brand-text">
            <span className="brand-icon"></span>
            Sueños 2026
          </Navbar.Brand>
          
          <Navbar.Toggle aria-label="Toggle navigation" />
          
          <Navbar.Collapse>
            <Nav className="ms-auto">
              
              {/* Journal */}
              <Nav.Link 
                as={Link} 
                to="/" 
                className={`nav-link-custom ${location.pathname === '/' ? 'active' : ''}`}
              >
                Journal
              </Nav.Link>

             <Nav.Link 
               as={Link} 
                to="/itinerary"
                 className={`nav-link-custom ${location.pathname === '/itinerary' ? 'active' : ''}`}
              >
                Itinerary
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/crew" 
                className={`nav-link-custom ${
                location.pathname.startsWith('/crew') ? 'active' : ''
                }`}
              >
                SSRI Crew
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}