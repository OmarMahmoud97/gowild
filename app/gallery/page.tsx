"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import loader from "@/public/assets/dog-loader.gif";
interface InstagramMedia {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  username?: string;
}

const Gallery = () => {
  const [media, setMedia] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInstagramMedia = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,username&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_KEY}`
        );
        setMedia(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Instagram media:", error);
        setLoading(false);
      }
    };
    fetchInstagramMedia();
  }, []);
  return (
    <section className="mt-[6rem] h-[110vh] z-50 flex items-center justify-between flex-col ">
      <h1 className="font text-3xl font-bold">Gallery</h1>
      <BackgroundAnimation />

      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-wrap items-center justify-center w-[64rem] h-[100vh] overflow-scroll">
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <Image src={loader} alt="Loading" className=" scale-150" />
              <p>Wait one paw...</p>
            </div>
          ) : (
            media.map((item: InstagramMedia) =>
              item.media_type === "IMAGE" ||
              item.media_type === "CAROUSEL_ALBUM" ? (
                <div key={item.id}>
                  <img
                    src={item.media_url}
                    alt={item.caption || "Instagram Image"}
                    className=" h-64 w-64 object-cover m-4"
                  />
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
