import React from "react";
import { Link, useParams } from "react-router-dom";
import { ResourceStatus, resourceImage, useResources } from "../Resources/ResourceCollection";

export default function Post() {
  const { id } = useParams();
  const { data, status, retry } = useResources(`posts/${encodeURIComponent(id)}`);
  const date = data?.date && new Date(data.date);
  return <section className="resource-section"><div className="resource-article">
    <Link className="resource-back" to="/resources">Back to resources</Link>
    {status !== "ready" || !data?.title ? <ResourceStatus status={status} retry={retry} emptyText="This article isn’t available." /> : <article>
      <h1>{data.title}</h1>
      <p className="resource-article__meta">{[data.author, date && !Number.isNaN(date.getTime()) && date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })].filter(Boolean).join(" · ")}</p>
      <p className="resource-article__intro">{data.description}</p>
      {data.image && <img src={resourceImage(data.image)} alt="" />}
      <div className="resource-article__content">{data.content}</div>
    </article>}
  </div></section>;
}
