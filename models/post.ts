import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: [true, 'Post Title is required.'],
  },
  category: {
    type: String,
    required: [true, 'Category is required.'],
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
  },
  firstParagraph: {
    type: String,
    required: [true, 'Paragraph is required.'],
  },
  secondParagraph: {
    type: String,
    required: [false],
  },
  quote: {
    type: String,
    required: [false],
  },
}, {
    timestamps: true
});

const Post = models.Post || model('Post', PostSchema);

export default Post;