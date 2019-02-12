// ===============================================================================

var friends = [
    {
      name: "Anna Kendrick",
      photo: "https://m.media-amazon.com/images/M/MV5BMjIzOTA0OTQyN15BMl5BanBnXkFtZTcwMjE1OTIwMw@@._V1_UY317_CR5,0,214,317_AL_.jpg",
      scores: [
          "4",
          "3",
          "5", 
          "3", 
          "4", 
          "3", 
          "5", 
          "4", 
          "5", 
          "2"
        ]
    },
    {
        name: "Rebel Wilson",
        photo: "https://www.usmagazine.com/wp-content/uploads/2018/11/rebel-wilson-plus-size-movie.jpg?w=300",
        scores: [
            "5",
            "5",
            "5", 
            "5", 
            "5", 
            "5", 
            "5", 
            "5", 
            "5", 
            "5"
          ]
      },
      {
        name: "Kristen Wigg",
        photo: "https://media.wnyc.org/i/800/0/c/85/photologue/photos/Kristen%20Wiig%20Headshot-smaller.jpg",
        scores: [
            "4",
            "5",
            "5", 
            "3", 
            "4", 
            "4", 
            "5", 
            "4", 
            "5", 
            "4"
          ]
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
