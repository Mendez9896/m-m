import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/stackoverflow", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(db => {
    console.log("Conexion establecida");
  })
  .catch(err => {
    console.log(err);
  });
