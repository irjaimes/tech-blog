const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nice!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'So helpful!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Really like this one!',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Lol',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Appreciate this, thanks!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'haha pretty much',
    user_id: 1,
    post_id: 17
  },
  {
    comment_text: 'Wow! Thanks for the link!',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Helped to clarify a lot.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'I am really digging this playlist!',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Awesome!',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Hahaha funny',
    user_id: 3,
    post_id: 17
  },
  {
    comment_text: 'Thanks!',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Great beats!',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'lol I relate.',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'I needed this. Thanks!',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'love it.',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text: 'YES!',
    user_id: 2,
    post_id: 18
  },
  {
    comment_text: 'I like more blue grass than folk',
    user_id: 4,
    post_id: 12
  },
  {
    comment_text: 'It is nice, but I prefer early folk music',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
