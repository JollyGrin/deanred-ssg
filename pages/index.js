import React, { Component } from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { getVideos } from '../lib/youtube';
import { sortDate } from '../lib/filter';

export default function Index({ youtube, preview }) {
  return (
    <Layout>
      <section className='hero'>
        <h1>
          dean's <br /> red drone
        </h1>
      </section>
      <section className='body'>
        {youtube.map((video, i) => (
          <Container key={i} vid={video} />
        ))}
      </section>
      <footer></footer>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  let youtube = {};
  const result = await getVideos();
  youtube = result.data.items;

  return {
    props: { youtube }, // will be passed to the page component as props
  };
}
