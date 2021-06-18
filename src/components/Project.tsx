import React, { useContext, useEffect, useState, Suspense } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { LazyLoadImage as Image } from "react-lazy-load-image-component";

import { projects } from "~/components/Global/Data";
import Loading from "~/components/Global/Loading";
import { ProjectDescription } from "~/components/Global/TextComponents";
import { PageContext } from "~/functions/Page";
import { StyleContext } from "~/functions/Style";

function Project() {
  const { setPage, setTitle, track } = useContext(PageContext);
  const { height, width, isMobile } = useContext(StyleContext);
  const location = useLocation();

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
    setPage("projects/");
    const project = projects.filter(
      (o) => o.key === location.pathname.substr(10)
    );
    if (project.length !== 0) {
      setData(project[0]);
      setTitle(project[0].name + " - Hayden Daly");
      track(`Project ${project[0].name}`);
    } else {
      setRedirect(true);
    }
  }, []);

  const link = data?.link;

  return (
    <div style={{ paddingTop: isMobile ? 10 : 15 }}>
      <div style={{ marginBottom: 10 }}>
        {redirect && <Redirect to="/" />}
        <Suspense fallback={<Loading />}>
          <div className="project-container">
            <a target="_blank" rel="noreferrer" href={link}>
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
                        minHeight: data?.aspect_ratio
                          ? (width * 0.95 > 1000 ? 1000 : width * 0.95) /
                            data.aspect_ratio
                          : height * 0.5,
                      }
                    : {
                        maxHeight: height * 0.9,
                        minHeight: data?.aspect_ratio
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
