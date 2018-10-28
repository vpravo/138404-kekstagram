'use strict';

const db = require(`../database/db`);

const setupCollection = async () => {
  const dBase = await db;
  const collection = dBase.collection(`posts`);
  collection.createIndex({
    date: 1
  }, {
    unique: true
  });
  return collection;
};

class PostsStore {
  constructor(collection) {
    this.collection = collection;
  }

  async getPost(date) {
    return (await this.collection).findOne({
      date
    });
  }

  get allPosts() {
    return (async () => (await this.collection).find())();
  }

  async save(data) {
    return (await this.collection).insertOne(data);
  }
}

module.exports = new PostsStore(setupCollection().catch((err) => console.error(`Field to setup collections 'posts'`, err)));
