import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Youtube() {
    const data = useLoaderData()
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch(
//       "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCjgYKNergvPtnhTpRysoMBw&key=AIzaSyAAjaVzF0SZQ9ylOdPoiAB7QlpknmNTxSs"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         console.log("hhhhhhhhhhhhhhhhhhhhhhhh");
//         console.log(data.items[0].snippet.thumbnails.high.url);
//         setdata(data);
//       });
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-500 text-white p-2 text-xl">
      Subscriber Count: {data.items[0].statistics.subscriberCount}
      <img
        src={data.items[0].snippet.thumbnails.high.url}
        alt="Youtube"
        width="300"
      ></img>
    </div>
  );
}

export default Youtube;

export const youtubeInfoLoader = async () => {
  const response = await fetch(
    "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCjgYKNergvPtnhTpRysoMBw&key=AIzaSyAAjaVzF0SZQ9ylOdPoiAB7QlpknmNTxSs"
  );
  return response.json()
};
