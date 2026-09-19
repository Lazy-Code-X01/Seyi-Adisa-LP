import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./updates.css";

const API = "https://seyi-adisa-backend.onrender.com";
const dateLabel = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "" : date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};
const Metadata = ({ post }) => <p className="home-journal__meta">{[post.author && `By ${post.author}`, dateLabel(post.date)].filter(Boolean).join(" · ")}</p>;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    axios.get(`${API}/api/posts`, { signal: controller.signal, timeout: 20000 })
      .then(({ data }) => {
        if (!Array.isArray(data)) throw new Error("Invalid posts response");
        setPosts([...data].reverse());
        setStatus("ready");
      })
      .catch((error) => { if (!axios.isCancel(error)) setStatus("error"); });
    return () => controller.abort();
  }, [attempt]);
  const featured = posts[0];
  const image = featured?.image;
  const imageSrc = image && (/^https?:\/\//.test(image) ? image : `${API}/${image.replace(/\\/g, "/").replace(/^\//, "")}`);

  return (
    <section className="home-journal" aria-labelledby="home-journal-heading">
      <div className="home-journal__inner">
      <div className="home-updates__heading">
        <h2 id="home-journal-heading">Featured Posts</h2>
        <Link className="home-updates__link" to="/resources">View all posts</Link>
      </div>
      {status !== "ready" || !featured ? (
        <div className="home-journal__status" role="status">
          <p>{status === "loading" ? "Loading the latest posts…" : status === "error" ? "We couldn’t load the posts. Please try again." : "New posts will appear here soon."}</p>
          {status === "error" && <button onClick={() => setAttempt(value => value + 1)}>Try again</button>}
        </div>
      ) : (
        <div className={`home-journal__grid ${posts.length === 1 ? "home-journal__grid--single" : ""}`}>
          <article className="home-journal__featured">
            {imageSrc && <Link to={`/resources/${featured._id}`} tabIndex={-1} aria-hidden="true"><img src={imageSrc} alt="" loading="lazy" /></Link>}
            <div className="home-journal__body">
              <Metadata post={featured} />
              <h3><Link to={`/resources/${featured._id}`}>{featured.title}</Link></h3>
              <p className="home-journal__description">{featured.description}</p>
              <Link className="home-journal__button" to={`/resources/${featured._id}`}>Read more</Link>
            </div>
          </article>
          {posts.length > 1 && <div className="home-journal__recent">
            <h3>More from the blog</h3>
            {posts.slice(1, 5).map(post => (
              <article key={post._id}>
                <Metadata post={post} />
                <h4><Link to={`/resources/${post._id}`}>{post.title}</Link></h4>
              </article>
            ))}
          </div>}
        </div>
      )}
      </div>
    </section>
  );
};
export default Blog;
