const mongoose = require('mongoose');

// connection url.
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(function(err) {
  console.log(err);
});

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });

// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: {
//     type: Number,
//     min: 1,
//     max: [10, 'Keep the values between 1-10']
//   },
//   review: String
// });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified"]
  },
  rating: {
    type: Number,
    min: 1,
    max: [10, "Keep the values between 1-10"]
  },
  review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty solid as a fruit."
// });
//
// fruit.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit."
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me."
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 3,
//   review: "Weird texture."
// });
//
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 37,
//   review: "Pretty solid as a fruit."
// });

// const fruit = new Fruit({
//   rating: 10,
//   review: "Peaches are so yummy."
// });
//
// fruit.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // console.log(fruits);
    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      console.log(fruit.name)
    });
  }
});

// Fruit.updateOne({_id: "610516b009152979dd323558"}, {name: "Peach"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document");
//   }
// });

// Fruit.deleteOne({name: "Apple"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   }
// });
