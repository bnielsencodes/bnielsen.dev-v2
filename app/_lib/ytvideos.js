import { useEffect, useState } from "react";
import axios from "axios";

export default function YTvideos() {
  const [data, setData] = useState();

  const youtubeApiKey = process.env.YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&forHandle=TraversyMedia&key=${youtubeApiKey}`
      );
      setData(results.data.subscriberCount);
      console.log(results.data.subscriberCount);
    };
    fetchData();
  });

  return <div></div>;
}
