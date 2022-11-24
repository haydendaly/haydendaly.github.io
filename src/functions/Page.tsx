import React, { FC, createContext, useContext, useEffect, useState } from 'react';

import { getTitle } from '~/functions/helper';

type PageContextType = {
  page: string;
  setPage: (page: string) => void;
  setTitle: (title: string) => void;
};

export const PageContext = createContext<PageContextType>({
  page: '',
  setPage: (page: string) => {},
  setTitle: (title: string) => {},
});

export const PageProvider: FC = ({ children }) => {
  const [page, setPage] = useState(window.location.pathname);
  const setTitle = (title: string) => {
    document.title = title;
  };
  useEffect(() => {
    if (!page.includes('projects/')) {
      setTitle(getTitle(page));
    }
  }, [page]);

  return (
    <PageContext.Provider value={{ page, setPage, setTitle }}>{children}</PageContext.Provider>
  );
};

export function usePage(): PageContextType {
  return useContext(PageContext);
}
