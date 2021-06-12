import React from "react";
import _ from "lodash";
import { isMobile } from "react-device-detect";
const createReactClass = require("create-react-class");
import { Link } from "react-router-dom";

function TextRow({ data }) {
  if (isMobile) {
    return (
      <div key={data.key} style={{ paddingBottom: 5 }}>
        <p className="section" style={{ marginBottom: 5 }}>
          {data.key}
        </p>
        <div style={{ fontSize: 15, whiteSpace: "pre-wrap" }}>
          {_.has(data, "component") ? (
            data.component
          ) : (
            <p className="section">{data.text}</p>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={data.key}
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: data?.component ? -10 : 5,
        }}
        className="section"
      >
        <p style={{ width: "20%", minWidth: 150 }}>{data.key}</p>
        <p
          style={{ width: "80%", whiteSpace: "pre-wrap" }}
          className="section about"
        >
          {data?.component ?? data.text}
        </p>
      </div>
    );
  }
}

function TextColumn({ data, isFirst }) {
  if (data.category.includes("year")) {
    return (
      <p
        key={data.key}
        className="section"
        style={{ fontSize: 16, marginBottom: 5, marginTop: isFirst ? 0 : 5 }}
      >
        {data.key}
      </p>
    );
  } else {
    return (
      <Link
        key={data.key}
        to={`/projects/${data.key}`}
        className="project-link"
      >
        {data.text}
      </Link>
    );
  }
}

function ProjectRow({ categories, data }) {
  if (isMobile) {
    return (
      <div>
        {data.map((o) => (
          <TextColumn data={o} />
        ))}
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", flexDirection: "row", paddingBottom: 15 }}>
        <div style={{ width: "20%" }}>
          {["All", ...categories.categories].map((o) => {
            const Cat = createReactClass({
              onClick: function () {
                this.forceUpdate();
                categories.categoryPick(o);
              },
              render: function () {
                return (
                  <div key={o}>
                    <a
                      onClick={this.onClick}
                      className={`category${
                        (o === "All" && categories.all) ||
                        categories.chosen.includes(o)
                          ? " current"
                          : ""
                      }`}
                    >
                      {o}
                    </a>
                  </div>
                );
              },
            });
            return <Cat />;
          })}
        </div>
        <div
          style={{
            width: "80%",
            whiteSpace: "pre-wrap",
            fontSize: isMobile ? 15 : 16,
          }}
        >
          {data.map((o) => (
            <TextColumn data={o} isFirst={data[0] === o} />
          ))}
        </div>
      </div>
    );
  }
}

function ProjectDescription({ project }) {
  const link = project.link !== "" && project.link;
  if (isMobile) {
    return (
      <div key={project.key} style={{ paddingBottom: 15 }}>
        {link ? (
          <a
            target="_blank"
            className="project-title"
            href={link}
            style={{ marginBottom: 5 }}
          >
            {project.name}
          </a>
        ) : (
          <p className="project" style={{ marginBottom: 5 }}>
            {project.name}
          </p>
        )}
        <div
          className="project"
          style={{ fontSize: 15, whiteSpace: "pre-wrap" }}
        >
          {project?.description ?? project.text}
          {project.stack && project.stack.length > 0 && (
            <i className="project-italics" style={{ fontSize: 15 }}>
              Using {project.stack.join(",  ")}
            </i>
          )}
          {project.friends && project.friends.length > 0 && (
            <i className="project-italics">
              Built using: {project.friends.join(",  ")}
            </i>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        key={project.key}
        style={{ display: "flex", flexDirection: "row", paddingBottom: 15 }}
      >
        <div className="project" style={{ width: "20%" }}>
          {link ? (
            <a target="_blank" className="project-title" href={link}>
              {project.name}
            </a>
          ) : (
            <p className="project">{project.name}</p>
          )}
        </div>
        <div
          className="project"
          style={{ width: "80%", whiteSpace: "pre-wrap" }}
        >
          {project?.description ?? project.text}
          {project.stack && project.stack.length > 0 && (
            <i className="project-italics" style={{ fontSize: 15 }}>
              Using {project.stack.join(",  ")}
            </i>
          )}
          {project.friends && project.friends.length > 0 && (
            <i className="project-italics">
              Built using: {project.friends.join(",  ")}
            </i>
          )}
        </div>
      </div>
    );
  }
}

export { TextRow, TextColumn, ProjectRow, ProjectDescription };
