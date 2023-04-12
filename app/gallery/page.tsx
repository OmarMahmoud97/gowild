"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";

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

  useEffect(() => {
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
              className=" h-56 w-56 object-cover m-4"
            />
          </a>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="mt-[6rem] min-h-[70vh] z-50 flex items-center justify-between flex-col overflow-scroll">
      <BackgroundAnimation />
      <h1 className="font text-3xl">Gallery</h1>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-wrap items-center justify-center w-[64rem]">
          {media.map(renderMedia)}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
