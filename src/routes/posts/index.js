"use strict";

const express = require(`express`);
// eslint-disable-next-line new-cap
const postsRouter = express.Router();
const {generateData} = require(`../../generate`);

const posts = generateData(17);
const SKIP_DEFAULT = 0;
const LIMIT_DEFAULT = 50;

postsRouter.get(`/`, (req, res) => {
  const skip = parseInt(req.query.skip, 10) || SKIP_DEFAULT;
  const limit = parseInt(req.query.limit, 10) || LIMIT_DEFAULT;
  const data = posts.slice(skip, limit + skip);
  res.send(data);
});

postsRouter.get(`/:date`, (req, res) => {
  const date = parseInt(req.params.date, 10);
  const post = posts.find((item) => {
    if (item.date === date) {
      return item;
    }
    return false;
  });

  res.send(post);
});

module.exports = postsRouter;
