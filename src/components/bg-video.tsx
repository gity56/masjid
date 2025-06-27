const BackgroundVideo = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      >
        <source src="..\..\picsss\0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
