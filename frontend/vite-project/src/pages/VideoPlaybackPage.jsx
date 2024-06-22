import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VideoPlaybackPage = () => {
  const location = useLocation();
  const { alumni } = location.state;
  const navigate = useNavigate();

  // Function to handle navigation to the next page
  const handleNext = () => {
    navigate("/initial-representations"); // Update with the appropriate route
  };

  // Extract the video ID from the YouTube URL
  const getYouTubeVideoId = (url) => {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const matches = url.match(regex);
    return matches && matches[1] ? matches[1] : null;
  };

  const videoId = getYouTubeVideoId(alumni.video);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <div className="container mx-auto p-4 ">
      <div className="mt-4 flex justify-center mt-2 mb-2">
        <button className="p-2 bg-red-500 text-white rounded hover:bg-red-700" onClick={handleNext}>
          Επόμενο
        </button>
      </div>
      <div className="video-wrapper overflow-auto w-full mt-2 mb-2" style={{ height: "60vh" }}>
        {embedUrl ? (
          <iframe
            className="w-full h-full"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={alumni.name}
          ></iframe>
        ) : (
          <p className="text-red-500">Invalid video URL</p>
        )}
      </div>
      <div className="p-4 bg-white mt-2 mb-2">
        <h3 className="text-lg font-bold">{alumni.name}</h3>
        <p>Graduated in: {alumni.graduationYear}</p>
        <p>Current Job: {alumni.currentJob}</p>
      </div>
    </div>
  );
};

export default VideoPlaybackPage;
