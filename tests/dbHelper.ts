import mongoose from "mongoose";

beforeAll(function (done) {
  mongoose.connect("mongodb://127.0.0.1:27017/plantanity-test");

  let db = mongoose.connection;
  for (const key in db.collections) db.collections[key].deleteMany({});

  db.on("error", console.error.bind(console, "MongoDB Error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
  });
});
