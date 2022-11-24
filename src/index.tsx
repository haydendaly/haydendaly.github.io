import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as FullStory from '@fullstory/browser';

import App from '~/components/App';
import { PageProvider } from '~/functions/Page';
import { StyleProvider } from '~/functions/Style';

FullStory.init({ orgId: 'o-1FDJVF-na1', devMode: process.env.NODE_ENV === 'development' });

ReactDOM.render(
  <PageProvider>
    <StyleProvider>
      <App />
    </StyleProvider>
  </PageProvider>,
  document.getElementById('app')
);
