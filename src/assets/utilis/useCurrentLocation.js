import { useEffect, useState } from "react";

export default function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function getLocation() {
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }

  function reset() {
    setLocation(null);
    setError(null);
    setLoading(false);
  }

  useEffect(() => {
    getLocation();
  }, []);

  return { location, getLocation, error, reset, loading };
}
