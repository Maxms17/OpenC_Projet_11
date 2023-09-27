import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';

function Home() {
  return (
    <body>
      <Layout>
        <main>
          <Hero />
          <Features />
        </main>
      </Layout>
    </body>
  );
}

export default Home;

