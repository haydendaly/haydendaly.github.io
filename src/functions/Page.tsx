import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import mixpanel from "mixpanel-browser";

import { getTitle } from "~/functions/helper";

type PageContextType = {
  track: (event: string) => void;
  page: string;
  setPage: (page: string) => void;
  setTitle: (title: string) => void;
};

function onMount() {
  if (process.env.NODE_ENV === "production") {
    mixpanel.init("5a38064353748fc70f226574b814d85d");
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then(async (res) => {
        mixpanel.identify(res.ip);
        track(window.location.pathname);
      });
  }
}

function track(event: string) {
  if (process.env.NODE_ENV === "production") {
    mixpanel.track(event);
  }
}

export const PageContext = createContext<PageContextType>({
  track: (event) => {},
  page: "",
  setPage: (page) => {},
  setTitle: (title) => {},
});

export const PageProvider: FC = ({ children }) => {
  const [page, setPage] = useState(window.location.pathname);
  const setTitle = (title: string) => {
    document.title = title;
  };
  useEffect(onMount, []);
  useEffect(() => {
    if (!page.includes("projects/")) {
      setTitle(getTitle(page));
    }
  }, [page]);
  return (
    <PageContext.Provider value={{ track, page, setPage, setTitle }}>
      {children}
    </PageContext.Provider>
  );
};

export function usePage(): PageContextType {
  return useContext(PageContext);
}
