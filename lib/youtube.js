import fetch from 'axios';

const key = process.env.APIKEY;
const playlist = process.env.PLAYLIST;
const maxResults = 100;

const apiURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&type=video&order=date&maxResults=${maxResults}&playlistId=${playlist}&key=${key}`;

export const getVideos = async () => {
  const result = await fetch(apiURL);
  return result;
};
