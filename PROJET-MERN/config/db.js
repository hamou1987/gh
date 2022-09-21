const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:qSq9qVSbIETJ7f3w@cluster0.f1rsmv6.mongodb.net/test",
  {
    useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
  }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));   