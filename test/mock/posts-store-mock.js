"use strict";

const Cursor = require(`./cursor-mock`);
const {generateData} = require(`./generate`);

const NUMBER_POSTS_ELEMENTS = 60;

class PostsStoreMock {
  constructor(data) {
    this.data = data;
  }

  async getPost(date) {
    console.log(date);
    console.log(Array.isArray(this.data));
    console.log(this.data[0]);
    return this.data.find((it) => it.date === date);
  }

  get allPosts() {
    return (async () => new Cursor(this.data))();
  }

  async save() {
    return {
      insertedId: 42
    };
  }
}

module.exports = new PostsStoreMock(generateData(NUMBER_POSTS_ELEMENTS));
