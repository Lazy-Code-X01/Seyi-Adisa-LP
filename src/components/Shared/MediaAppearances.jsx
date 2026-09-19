import React, { useEffect, useRef, useState } from "react";
import "../Home/updates.css";

const videos = [
  { title: "Sustainable Governance on TVC", id: "l1_p5HaGOQY" },
  { title: "Leadership in Crisis Podcast", id: "0OqvHagwa6Q" },
  { title: "Future of Governance Interview", id: "34AISwbvD2Q" },
  { title: "Ethical Leadership Webinar", id: "QoyfLpbXs6s" },
];

const MediaAppearances = () => {
  const [video, setVideo] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    if (!video) return;
    dialog.current.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [video]);
  const close = () => {
    dialog.current?.close();
    setVideo(null);
    trigger.current?.focus();
  };

  return (
    <section className="home-media" aria-labelledby="home-media-heading">
      <div className="home-media__inner">
        <div className="home-updates__heading"><h2 id="home-media-heading">Media Appearances</h2></div>
        <p className="home-media__intro">Interviews, podcasts, and conversations on sustainable governance, leadership development, and community empowerment.</p>
        <div className="home-media__grid">
          {videos.map(item => (
            <button className="home-media__card" key={item.id} onClick={event => { trigger.current = event.currentTarget; setVideo(item); }} aria-label={`Watch ${item.title}`}>
              <span className="home-media__thumbnail">
                <img src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} alt="" loading="lazy" />
                <span className="home-media__play" aria-hidden="true">▶</span>
              </span>
              <span className="home-media__title">{item.title}</span>
              <span className="home-media__watch">Watch conversation</span>
            </button>
          ))}
        </div>
      </div>
      {video && <dialog className="home-media__dialog" ref={dialog} aria-labelledby="home-video-title" onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === event.currentTarget) close(); }}>
        <div className="home-media__player">
          <div className="home-media__player-heading"><h3 id="home-video-title">{video.title}</h3><button onClick={close} aria-label="Close video" autoFocus>×</button></div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`} title={video.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">Watch on YouTube</a>
        </div>
      </dialog>}
    </section>
  );
};
export default MediaAppearances;
