import Post from '../models/posts.cjs'

export const createPost = async (req, res) => {
  const newPost = new Post(req.body)

  
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
    console.log('New post created!')
  } catch (err) {
    throw err
  }
}

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        // $set is a MongoDB operator that replaces the value of a field with the specified value.
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedPost)
  } catch (err) {
    throw err
  }
}

export const deletePost = async (req, res) => {
  try {
    await Post.deleteOne(
      {
        _id: req.params.id,
      },
      { new: true }
    )
    res.status(200).json('Post Deleted')
  } catch (err) {
    throw err
  }
}

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find()
    res.status(200).json(post)
  } catch (err) {
    throw err
  }
}

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (err) {
    throw err
  }
}
