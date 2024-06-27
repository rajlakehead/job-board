import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const JobRow = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute top-4 right-2 cursor-pointer">
            <FontAwesomeIcon className="size-5 text-gray-200" icon={faHeart} />
        </div>
        <div className="flex grow gap-4">
          <div className="content-center">
            <img
              className="size-12"
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
              alt="Spotify"
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div className="text-gray-500 text-sm">Spotify</div>
              <div className="font-bold text-lg mb-1">Product designer</div>
              <div className="text-gray-400 text-sm">
                Remote &middot; New York, US &middot; Full-time
              </div>
            </div>
            <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobRow;
