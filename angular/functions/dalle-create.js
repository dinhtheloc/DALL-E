// import { Configuration, OpenAIApi } from 'openai'

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// })

// const openai = new OpenAIApi(configuration)

exports.handler = (event, context) => {
    return {
        statusCode: 200,
        body: 'hello world',
    }
    try {
        const { prompt } = JSON.parse(event.body)
        console.log('Function `dall-e` invoked', data)

        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        })

        const image = aiResponse.data.data[0].b64_json

        // res.status(200).json({ photo: image })

        return {
            statusCode: 200,
            body: JSON.stringify({ photo: image }),
        }
    } catch (error) {
        console.error(error)

        return {
            statusCode: 500,
            body: error?.response.data.error.message || 'Something went wrong',
        }
        // res.status(500).send(
        //     error?.response.data.error.message || 'Something went wrong'
        // )
    }
}
