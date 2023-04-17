"use client";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import loader from "@/public/assets/dog-loader.gif";
import "../../components/cards/cards.css";

interface InstagramMedia {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  username?: string;
  children?: InstagramMedia[];
}

const Gallery = () => {
  const [media, setMedia] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const imagesPerPage = 12;
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const displayMedia = media.slice(startIndex, endIndex);
  const totalPages = Math.ceil(media.length / imagesPerPage);

  const fetchInstagramMedia = useCallback(async (after = "") => {
    try {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,username,children{media_type,media_url}&limit=200&access_token=${
        process.env.NEXT_PUBLIC_INSTAGRAM_KEY
      }${after ? `&after=${after}` : ""}`;
      const response = await axios.get(url);

      const newMedia = response.data.data;
      setMedia((prevMedia) => [...prevMedia, ...newMedia]);

      if (response.data.paging && response.data.paging.next) {
        const nextAfter =
          new URL(response.data.paging.next).searchParams.get("after") || "";
        fetchInstagramMedia(nextAfter);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching Instagram media:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInstagramMedia();
  }, [fetchInstagramMedia]);

  const paginate = (direction: number) => {
    setCurrentPage(currentPage + direction);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="mt-[6rem] min-h-screen z-50 flex items-center justify-between flex-col ">
      <h1 className="font text-3xl font-bold">Gallery</h1>
      <BackgroundAnimation />
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-wrap items-center justify-center w-[64rem] ">
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <Image src={loader} alt="Loading" className=" scale-150" />
              <p>Wait one paw...</p>
            </div>
          ) : (
            displayMedia.map((item: InstagramMedia) =>
              item.media_type === "IMAGE" ||
              item.media_type === "CAROUSEL_ALBUM" ? (
                <div key={item.id}>
                  <img
                    src={item.media_url}
                    alt={item.caption || "Instagram Image"}
                    className="h-72 w-72 object-cover m-4"
                  />
                </div>
              ) : null
            )
          )}
        </div>
      </div>
      <div className="m-4 flex items-center justify-center">
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(-1)}
          className="btn cursor-pointer text-xs font-bold uppercase text-white bg-green-600 p-2 hover:bg-white hover:text-green-600"
        >
          Previous
        </button>
        <span className="font font-semi-bold mx-6">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          disabled={endIndex >= media.length}
          onClick={() => paginate(1)}
          className="btn cursor-pointer text-xs font-bold uppercase text-white bg-green-600 p-2 hover:bg-white hover:text-green-600"
        >
          Next
        </button>
      </div>
    </section>
  );
};
export default Gallery;
