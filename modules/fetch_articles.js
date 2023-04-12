import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'
dotenv.config()

export default class GenerateArticle {
  static articleDB = [
    'Write an heading and paragraph (MAX 20 WORDS) introduction about the danish weather in danish.',
    'Write an heading and paragraph (MAX 20 WORDS) introduction about the danish term hygge in danish.',
    'Write an heading and paragraph (MAX 20 WORDS) introduction about danish education in danish.',
    'Write an heading and paragraph (MAX 20 WORDS) introduction about danish taxes in danish.',
    'Write an heading and paragraph (MAX 20 WORDS) introduction about danish finance in danish.'
  ]

  static randomNumber () {
    return Math.floor(Math.random() * 6)
  }

  static async getArticles () {
    const randomInt = this.randomNumber()
    const configuration = new Configuration({
      apiKey: process.env.API_KEY
    })
    const openai = new OpenAIApi(configuration)
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system', content: 'Imagine you are a journalist.'
        },
        { role: 'user', content: `${this.articleDB[randomInt]}` }
      ]
    })
    return response.data.choices[0].message.content
  }
}
