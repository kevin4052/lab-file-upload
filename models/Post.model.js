const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    content: {type: String},
    creatorId: { type: Schema.Types.ObjectId, ref: "User" },
    picPath: {type: String},
    picName: {type: String}
  },
  {
    timestamps: true
  });

  const Post = model('Post', postSchema);
  module.exports = Post;