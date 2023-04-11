"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface InstagramMedia {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp?: string;
  username?: string;
}

const Gallery = () => {
  const [media, setMedia] = useState<InstagramMedia[]>([]);

  const fetchInstagramMedia = async () => {
    try {
      const response = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`
      );

      setMedia(response.data.data);
    } catch (error) {
      console.error("Error fetching Instagram media:", error);
    }
  };

  useEffect(() => {
    fetchInstagramMedia();
  }, []);

  const renderMedia = (item: InstagramMedia) => {
    if (item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM") {
      return (
        <div key={item.id}>
          <a href={item.permalink} target="_blank" rel="noopener noreferrer">
            <img
              src={item.media_url}
              alt={item.caption || "Instagram Image"}
              width="300"
            />
          </a>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1>Instagram Gallery</h1>
      <div>{media.map(renderMedia)}</div>
    </div>
  );
};

export default Gallery;
