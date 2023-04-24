import {
  GoogleMap,
  LoadScript,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: -35.21771789700376,
  lng: -65.30470872298973,
};

const start = JSON.parse(localStorage.getItem("origin"));
const end = JSON.parse(localStorage.getItem("destination"));

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={`${import.meta.env.VITE_GMAPS_KEY}`}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        <MarkerF position={start} />
        <MarkerF position={end} />

        <PolylineF
          path={[start, end]}
          options={{
            strokeColor: "#A00A4C",
            strokeOpacity: 1.0,
            strokeWeight: 4,
            geodesic: true,
            clickable: true,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
