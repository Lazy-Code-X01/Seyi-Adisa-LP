import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./page.css";

export const API = "https://seyi-adisa-backend.onrender.com";
export const resourceImage = value => value && (/^https?:\/\//.test(value) ? value : `${API}/${value.replace(/\\/g, "/").replace(/^\//, "")}`);

export function useResources(path) {
  const [state, setState] = useState({ data: null, status: "loading" });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setState({ data: null, status: "loading" });
    axios.get(`${API}/api/${path}`, { signal: controller.signal, timeout: 20000 })
      .then(({ data }) => setState({ data, status: "ready" }))
      .catch(error => { if (!axios.isCancel(error)) setState({ data: null, status: "error" }); });
    return () => controller.abort();
  }, [path, attempt]);
  return { ...state, retry: () => setAttempt(value => value + 1) };
}

export function ResourceStatus({ status, retry, emptyText }) {
  return <div className="resource-state" role="status"><p>{status === "loading" ? "Loading…" : status === "error" ? "This content couldn’t be loaded. Please try again." : emptyText}</p>{status === "error" && <button onClick={retry}>Try again</button>}</div>;
}

export default function ResourceCollection({ publications = false }) {
  const { data, status, retry } = useResources(publications ? "publications" : "posts");
  const [page, setPage] = useState(1);
  const [downloads, setDownloads] = useState({});
  const heading = useRef(null);
  const items = Array.isArray(data) ? (publications ? data : [...data].reverse()) : [];
  const size = publications ? 4 : 6;
  const total = Math.ceil(items.length / size);
  const title = publications ? "Publications" : "Blog Posts";
  const id = publications ? "publications" : "blog-posts";
  const changePage = value => { setPage(value); heading.current?.focus({ preventScroll: true }); heading.current?.scrollIntoView({ block: "start" }); };
  async function download(item) {
    setDownloads(previous => ({ ...previous, [item._id]: "Downloading…" }));
    try {
      const response = await axios.get(`${API}/api/publications/download/${encodeURIComponent(item._id)}`, { responseType: "blob", timeout: 30000 });
      const url = URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = url; link.download = `publication-${item._id}.pdf`; document.body.appendChild(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setDownloads(previous => ({ ...previous, [item._id]: "Download started." }));
    } catch { setDownloads(previous => ({ ...previous, [item._id]: "Download failed. Please try again." })); }
  }
  return <section className={`resource-section ${publications ? "resource-section--publications" : ""}`} aria-labelledby={id}>
    <div className="resource-inner">
      <div className="home-updates__heading"><h2 id={id} ref={heading} tabIndex={-1}>{title}</h2></div>
      <p className="resource-intro">{publications ? "Access e-books and reports on governance and leadership, with practical guidance for your personal and professional life." : "Articles, practical tips, and perspectives on governance and leadership."}</p>
      {status !== "ready" || !items.length ? <ResourceStatus status={status === "ready" && !Array.isArray(data) ? "error" : status} retry={retry} emptyText={`New ${publications ? "publications" : "posts"} will appear here soon.`} /> : <>
        <div className={`resource-grid ${publications ? "resource-grid--publications" : ""}`}>
          {items.slice((page - 1) * size, page * size).map(item => <article className="resource-card" key={item._id}>
            {item.image && <img src={resourceImage(item.image)} alt="" loading="lazy" />}
            <div className="resource-card__body">
              <h3>{publications ? item.title : <Link to={`/resources/${item._id}`}>{item.title}</Link>}</h3>
              <p>{item.description}</p>
              {publications ? <><button disabled={downloads[item._id] === "Downloading…"} onClick={() => download(item)}>{downloads[item._id] === "Downloading…" ? "Downloading…" : "Download"}</button><span className="resource-download-status" role="status">{downloads[item._id] !== "Downloading…" && downloads[item._id]}</span></> : <Link className="resource-button" to={`/resources/${item._id}`}>Read more</Link>}
            </div>
          </article>)}
        </div>
        {total > 1 && <nav className="resource-pagination" aria-label={`${title} pagination`}><button disabled={page === 1} onClick={() => changePage(page - 1)}>Previous</button><span aria-live="polite">Page {page} of {total}</span><button disabled={page === total} onClick={() => changePage(page + 1)}>Next</button></nav>}
      </>}
    </div>
  </section>;
}
