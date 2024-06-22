import { useNavigate } from 'react-router-dom';
import { AppContext } from '../AppContext';
import React, { useContext } from 'react';

const AlumniVideoItem = ({ alumni }) => {
    const fullName = `${alumni.name}`;
    const graduationYear = alumni.graduationYear;
    const jobTitle = alumni.currentJob;
    const educationInstitute = alumni.educationInstitute;

    const { handleAlumniClick } = useContext(AppContext);
    const navigate = useNavigate();

    const onhandleAlumniClick = () => {
        handleAlumniClick('Video Representation', fullName);
        navigate('/video-playback', { state: { alumni } });
    };

    // Function to extract YouTube video ID
    const getYouTubeVideoId = (url) => {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const matches = url.match(regex);
        return (matches && matches[1]) ? matches[1] : null;
    };

    const videoId = getYouTubeVideoId(alumni.video);
    const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

    return (
        <div className="w-100 h-100 rounded shadow-lg bg-white overflow-auto cursor-pointer relative" onClick={onhandleAlumniClick}>
            <div className="video-wrapper relative overflow-auto">
                {embedUrl ? (
                    <iframe
                        className="w-full h-64"
                        src={embedUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={fullName}
                    ></iframe>
                ) : (
                    <p className="text-red-500">Invalid video URL</p>
                )}
                {/* Overlay to capture clicks */}
                <div className="absolute inset-0 z-10 bg-transparent" onClick={onhandleAlumniClick}></div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold">{fullName}</h3>
                <p>Graduated in: {graduationYear}</p>
                <p>Current Job: {jobTitle}</p>
            </div>
        </div>
    );
};

export default AlumniVideoItem;