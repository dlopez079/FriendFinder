//Scores for user of the site.
var userScores = [
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
  ];

  var friends = [
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
    ]

var userScore;
var friendScore = {
    "scores" : friends  .scores,
};

//we have to subtract the matching indexes from each array.
//I looped through the first array and  used userScore to hold the values.
for (u = 0; u < userScores.length; u++) {
    userScore = userScores[u];
    console.log("User Score: " + userScore);
}

//I looped through the second array and used friendScore to hold the values.
for (f = 0; f < friends[f].scores.length; f++) {
    friendScore = friends[f].scores[f];
    console.log("friend Score: " + friendScore);
}

// I created a variable called results to hold the results from the difference between the 2 different array values. var result = userScore - friendScore;
var results = [];

//I pushed the absolute values of the difference of corresponding indexes between the two arrays. 
results.push(
    Math.abs(friends[0] - userScores[0]),
    Math.abs(friends[1] - userScores[1]),
    Math.abs(friends[2] - userScores[2]),
    Math.abs(friends[3] - userScores[3]),
    Math.abs(friends[4] - userScores[4]),
);
// console.log(results);

var sum = results.reduce(function (total, num) {
	return total + num;
	});

// console.log(sum);

// console.log (5+ 1+ 4+ 4+ 5+ 1+ 2+ 5+ 4+ 1);