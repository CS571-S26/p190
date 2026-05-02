import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/ItineraryPage.jsx'
import TripDetailPage from './pages/TripDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Layout from './components/Layout.jsx'
import CrewMemberPage from "./pages/CrewMemberPage";
import CrewPage from "./pages/CrewPage";
import ItineraryPage from "./pages/ItineraryPage.jsx";
// import CrewMemberPage from "./pages/CrewMemberPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
        <Route path="entry/:id" element={<TripDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/crew/:memberId" element={<CrewMemberPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
      </Route>
    </Routes>
  )
}

export default App