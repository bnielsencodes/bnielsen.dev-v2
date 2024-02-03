import { useEffect, useState } from "react";
import axios from "axios";

export default function YTvideos() {
  const [data, setData] = useState();

  const youtubeApiKey = process.env.YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        `https://youtube.googleapis.com/youtube/v3/statistics/subscriberCount&channelId=traversymedia&key=${youtubeApiKey}`
      );
      setData(results.data);
      console.log(results.data);
    };
    fetchData();
  });

  return (
    <div>
    </div>
  );
}
