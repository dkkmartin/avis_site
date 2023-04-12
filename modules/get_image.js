export default class GenerateImage {
  static unsplashKeywords = [
    'weather',
    'happy',
    'school',
    'taxes',
    'finance'
  ]

  static makeImageLink (randomNumber) {
    return `https://source.unsplash.com/620x350/?${this.unsplashKeywords[randomNumber]}`
  }
}
