var friends = [
  {
    "name": "David",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      5,
      2,
      4,
      2,
      5,
      1,
      2,
      5,
      2,
      1
    ]
  },
  {
    "name": "Jay-Z",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwisnZ3SnZDlAhW4JzQIHd6RBbIQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fen.wikipedia.org%252Fwiki%252FJay-Z%26psig%3DAOvVaw0Zaz5lRUXQ6qfqE7W1NmcZ%26ust%3D1570746642191498&psig=AOvVaw0Zaz5lRUXQ6qfqE7W1NmcZ&ust=1570746642191498",
    "scores": [
      5,
      2,
      4,
      2,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Selena Gomez",
    "photo": "https://www.google.ca/url?sa=i&source=images&cd=&ved=2ahUKEwjj2qmen5DlAhWPsp4KHcsaD9UQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.elle.com%2Fculture%2Fcelebrities%2Fa29398087%2Fselena-gomez-makeup-free-selfie%2F&psig=AOvVaw1faa9Xq0C3HH0ieBPAF50b&ust=1570747144094138",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Camila Cabello",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjB99S9n5DlAhUgITQIHUgSDMsQjRx6BAgBEAQ&url=https%3A%2F%2Fstylecaster.com%2Fcamila-cabello-romance-album-songs-shawn-mendes%2F&psig=AOvVaw3Zoumfx_uA8QDUJ2qLk98o&ust=1570747201549086",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Katy Perry",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiYx5XYn5DlAhWBLn0KHXT1B5YQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Ftime.com%252F4634331%252Fkaty-perrys-psa-muslim-registry%252F%26psig%3DAOvVaw3POrOXUT62mDROg7mIS8KS%26ust%3D1570747262816306&psig=AOvVaw3POrOXUT62mDROg7mIS8KS&ust=1570747262816306",
    "scores": [
      5,
      2,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Ozuna",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiSwbLzn5DlAhUlCTQIHYq7DpIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.billboard.com%2Farticles%2Fcolumns%2Flatin%2F8472058%2Fhighlights-from-ozuna-billboard-interview&psig=AOvVaw0sY3unxR7S634OlmpQKeGM&ust=1570747318024244",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      2,
      4,
      1
    ]
  },
  {
    "name": "Annuel AA",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjgreKOoJDlAhVRIjQIHeHYB5kQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.famousbirthdays.com%2Fpeople%2Fanuel-aa.html&psig=AOvVaw1jIBr2RAj8RrSNlJrwHSIy&ust=1570747366196467",
    "scores": [
      5,
      2,
      4,
      2,
      5,
      1,
      2,
      2,
      4,
      1
    ]
  },
  {
    "name": "Bad Bunny",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiO4PCpoJDlAhVGHDQIHXzNCcgQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dr92N93Tdm0I&psig=AOvVaw32i2WtqsRaXMdwEnDZ1fBR&ust=1570747420408768",
    "scores": [
      5,
      1,
      4,
      2,
      5,
      1,
      2,
      5,
      2,
      1
    ]
  },
  {
    "name": "Pete Alonso",
    "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjlxZDeoJDlAhWoIDQIHbqTCr0QjRx6BAgBEAQ&url=https%3A%2F%2Frisingapple.com%2F2019%2F04%2F15%2Fmets-pete-alonso-statcast%2F&psig=AOvVaw0wKFnxMdZxv-HiqA8tRETn&ust=1570747534272425",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }
];
module.exports = friends;