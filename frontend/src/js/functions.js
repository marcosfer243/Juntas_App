import axios from "axios";

// export const getDistance = async (origin, destinations) => {
//   const dCoords = JSON.parse(destinations);
//   const oCoords = JSON.parse(origin);
//   let locations = [
//     [oCoords.lng, oCoords.lat],
//     [dCoords.lng, dCoords.lat],
//   ];
//   const data = {
//     sources: [0],
//     locations: locations,
//     metrics: ["distance"],
//     units: "km",
//   };
//   console.log(data);
//   // try {
//   //   const response = await axios.post(
//   //     "https://api.openrouteservice.org/v2/matrix/driving-car",
//   //     data,
//   //     {
//   //       headers: {
//   //         Authorization: `Bearer ${import.meta.env.VITE_OPENROUTE_KEY}`,
//   //       },
//   //     }
//   //   );
//   //   // return response.data;
//   //   console.log(response.data);
//   // } catch (error) {
//   //   console.log(error);
//   // }
// };

export const getDirections = async (origin, destination) => {
  try {
    const response = await axios.get(
      "https://api.openrouteservice.org/v2/directions/driving-car",
      {
        params: {
          api_key: process.env.REACT_APP_OPENROUTE_KEY,
          start: String(origin),
          end: String(destination),
        },
      }
    );
    const { coordinates } = response.data.features[0].geometry;
    const { steps } = response.data.features[0].properties.segments[0];
    const directionsData = {
      coordinates,
      steps,
    };
    return directionsData;
  } catch (error) {
    console.log(error);
  }
};
