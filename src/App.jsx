import "./App.css";
import useCurrentLocation from "./assets/utilis/useCurrentLocation";

function App() {
  const { location, error, loading, getLocation, reset } = useCurrentLocation();
  return (
    <div>
      <h1>Current Location:</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error found: {error}</p>}
      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
      <button onClick={getLocation}>Get Location</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
