'use strict';

const {generateData} = require(`../../test/mock/generate`);
const store = require(`../posts/store`);
const {printCommand, exitSucces} = require(`./utils`);
const {green} = require(`colors/safe`);

const POSTS_NUMBER = 25;

const fill = {
  name: `fill`,
  description: `Fills database with ${POSTS_NUMBER} generated objects`,
  async execute() {
    await store.drop();
    const allPosts = await generateData(POSTS_NUMBER);

    for (const post of allPosts) {
      await store.save(post);
    }

    printCommand(green(`${POSTS_NUMBER} posts generated and inserted in Database`));
    exitSucces();
  }
};

module.exports = fill;
