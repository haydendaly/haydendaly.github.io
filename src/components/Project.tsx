import React, { useState, useEffect, Suspense } from "react";
import _ from "lodash";
import mixpanel from "mixpanel-browser";

import { isMobile } from "react-device-detect";
import { useLocation, Redirect } from "react-router-dom";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { projects } from "./Global/Data";
import Loading from "./Global/Loading";
import { ProjectDescription } from "./Global/TextComponents";
import { useWindowDimensions } from "../functions/helper";

function Project(props: { setPage: (page: string) => void }) {
  let location = useLocation();
  const { height, width } = useWindowDimensions();
  const [data, setData] = useState<any>({
    key: "",
    text: "",
    component: "",
    name: "",
  });
  const [hover, setHover] = useState(false);
  const [image, setImage] = useState(location.pathname.substr(10));
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    props.setPage("projects/");
    let project = projects.filter(
      (o) => o.key === location.pathname.substr(10)
    );
    if (project.length !== 0) {
      setData(project[0]);
      document.title = project[0].name + " - Hayden Daly";
      mixpanel.track(`Project ${project[0].name}`);
    } else {
      setRedirect(true);
    }
  }, []);

  const link = _.get(data, "link");

  return (
    <div style={{ paddingTop: isMobile ? 10 : 15 }}>
      <div style={{ marginBottom: 10 }}>
        {redirect && <Redirect to="/" />}
        <Suspense fallback={<Loading height="100%" width="100%" />}>
          <div className="project-container">
            <a target="_blank" href={link}>
              <Image
                width={"100%"}
                alt={data.name}
                src={`https://hayden-portfolio.s3.us-east-2.amazonaws.com/${image}.png`}
                placeholderSrc={`https://hayden-portfolio.s3.us-east-2.amazonaws.com/${image}_thumb.png`}
                className="selectable"
                style={
                  hover
                    ? {
                        opacity: "75%",
                        maxHeight: height * 0.9,
                        minHeight: _.has(data, "aspect_ratio")
                          ? (width * 0.95 > 1000 ? 1000 : width * 0.95) /
                            data.aspect_ratio
                          : height * 0.5,
                      }
                    : {
                        maxHeight: height * 0.9,
                        minHeight: _.has(data, "aspect_ratio")
                          ? (width * 0.95 > 1000 ? 1000 : width * 0.95) /
                            data.aspect_ratio
                          : height * 0.5,
                      }
                }
                onMouseOut={() => link && link !== "" && setHover(false)}
                onMouseOver={() => link && link !== "" && setHover(true)}
                effect="blur"
                onError={() => {
                  setImage("fallback_image");
                }}
              />
            </a>
          </div>
        </Suspense>
      </div>
      <ProjectDescription project={data} />
    </div>
  );
}

export default Project;
