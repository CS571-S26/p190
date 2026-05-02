export default function SpotifyPlayer() {
  return (
    <div className="spotify-player-section">
      <h2 className="spotify-title">Trip Soundtrack 🎶</h2>

      <div className="spotify-player-card">
        <iframe
            src="https://open.spotify.com/embed/playlist/1oKthzjyqi427sm5GyBjeW"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: "12px" }}
        ></iframe>
      </div>
    </div>
  );
}