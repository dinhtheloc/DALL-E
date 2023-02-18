// import { v2 as cloudinary } from 'cloudinary'

// import Post from './mongodb/models/post.js'
// import connectDB from './mongodb/connect.js'
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// })

// connectDB(process.env.MONGODB_URL)

exports.handler = (event, context) => {
    return {
        statusCode: 200,
        body: 'hello world',
    }
    try {
        const posts = await Post.find({})
        // res.status(200).json({ success: true, data: posts });
        return {
            statusCode: 200,
            body: JSON.stringify(posts),
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify('Fetching posts failed, please try again'),
        }
        // res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
}
