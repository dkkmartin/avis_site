import { Configuration, OpenAIApi } from 'openai'

export default class GenerateArticle {
  static headingDB = [
    'Write a heading (MAX 20 WORDS) introduction about the danish weather.',
    'Write a heading (MAX 20 WORDS) introduction about the danish term hygge.',
    'Write a heading (MAX 20 WORDS) introduction about danish education.',
    'Write a heading (MAX 20 WORDS) introduction about danish taxes.',
    'Write a heading (MAX 20 WORDS) introduction about danish finance.'
  ]

  static paraDB = [
    'Write a paragraph (MAX 20 WORDS) introduction about the danish weather.',
    'Write a paragraph (MAX 20 WORDS) introduction about the danish term hygge.',
    'Write a paragraph (MAX 20 WORDS) introduction about danish education.',
    'Write a paragraph (MAX 20 WORDS) introduction about danish taxes.',
    'Write a paragraph (MAX 20 WORDS) introduction about danish finance.'
  ]

  static randomNumber () {
    return Math.floor(Math.random() * 5)
  }

  static async getPara (randomNum) {
    const configuration = new Configuration({
      apiKey: ''
    })
    const openai = new OpenAIApi(configuration)
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system', content: 'Imagine you are a journalist. Do not write long text. Keep it at max 20 words. Dont include citation '
        },
        { role: 'user', content: `${this.paraDB[randomNum]}` }
      ]
    })
    return response.data.choices[0].message.content
  }

  static async getHeading (randomNum) {
    const configuration = new Configuration({
      apiKey: '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'
    })
    const openai = new OpenAIApi(configuration)
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system', content: 'Imagine you are a journalist. Do not write long text. Keep it at max 20 words.'
        },
        { role: 'user', content: `${this.headingDB[randomNum]}` }
      ]
    })
    return response.data.choices[0].message.content
  }
}
