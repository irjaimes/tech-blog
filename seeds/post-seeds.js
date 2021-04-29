const { Post } = require("../models");

const postdata = [
  {
    title: "Youtube tutorials on handlebars",
    post_url: "https://www.youtube.com/watch?v=HxJzZ7fmUDQ",
    user_id: 1,
  },
  {
    title: "Youtube tutorial on HTML",
    post_url: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
    user_id: 2,
  },
  {
    title: "Youtube tutorial on javascript",
    post_url: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
    user_id: 3,
  },
  {
    title: "Youtube tutorial on CSS",
    post_url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
    user_id: 4,
  },
  {
    title: "Youtube tutorial on mysql",
    post_url: "https://www.youtube.com/watch?v=9ylj9NR0Lcg&t=812s",
    user_id: 5,
  },
  {
    title: "Youtube tutorial on sequelize",
    post_url: "https://www.youtube.com/watch?v=3qlnR9hK-lQ&t=322s",
    user_id: 6,
  },
  {
    title: "Spotify playlist for Hip-Hop lovers",
    post_url: "https://open.spotify.com/playlist/5TZkls9cEOzWDR6qCxwDot?si=bU-O4Va6TJ6qGx2r30NSZw",
    user_id: 1,
  },
  {
    title: "Spotify playlist for Blues lovers",
    post_url: "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk?si=WNItkNfIRbChBX3WwUW4wg",
    user_id: 2,
  },
  {
    title: "Spotify playlist for Latin lovers",
    post_url: "https://open.spotify.com/playlist/37i9dQZF1DXbLMw3ry7d7k?si=__6ZJV84ROO7KNI225-R1Q",
    user_id: 3,
  },
  {
    title: "Spotify playlist for Indie lovers",
    post_url: "https://open.spotify.com/playlist/20WquGIaof2g2KjBdve5RJ?si=1YWm-Z_DQcSFwpxxslExDg",
    user_id: 4,
  },
  {
    title: "Spotify playlist for Jazz lovers",
    post_url: "https://open.spotify.com/playlist/37i9dQZF1DWV7EzJMK2FUI?si=3w0aOEpRQfC4N3wZyWgReQ",
    user_id: 5,
  },
  {
    title: "Spotify playlist for Folk lovers",
    post_url: "https://open.spotify.com/playlist/37i9dQZF1DX1nqy6pUAoUv?si=JON8WwEGTkaGcyGNArM8MA",
    user_id: 6,
  },
  {
    title: "HTML has me feeling like ...",
    post_url: "https://media.giphy.com/media/Od0QRnzwRBYmDU3eEO/giphy.gif",
    user_id: 1,
  },
  {
    title: "CSS has me feeling like ...",
    post_url: "https://media.giphy.com/media/lSoncLXrbUaRO/giphy.gif",
    user_id: 2,
  },
  {
    title: "Javascript has me feeling like ...",
    post_url: "https://media.giphy.com/media/B2zrUu1Q4HKeSO1brl/giphy.gif",
    user_id: 3,
  },
  {
    title: "Bootstrap has me feeling like ...",
    post_url: "https://media.giphy.com/media/B2zrUu1Q4HKeSO1brl/giphy.gif",
    user_id: 4,
  },
  {
    title: "mySql has me feeling like ...",
    post_url: "https://media.giphy.com/media/l2SpYsmk9tieR24ms/giphy.gif",
    user_id: 5,
  },
  {
    title: "Sequelize has me feeling like ...",
    post_url: "https://giphy.com/clips/theoffice-the-office-peacock-tv-show-G96zgIcQn1L2xpmdxi",
    user_id: 6,
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
