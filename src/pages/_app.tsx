import React from 'react';

import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/Global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
