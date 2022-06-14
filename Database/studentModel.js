const mongoose = require("mongoose");
// connecting MongoDB
const url =
  "mongodb+srv://chaitanya:1234@vitdata.pe0psmh.mongodb.net/Data?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then().catch();

// defining schema
const userSchema = new mongoose.Schema({
  name: String,
  div: String,
  rollNo: String,
  email: { type: String, unique: true },
  mobile: { type: String, unique: true },
  position: { type: String, default: "student" },
  password: String,
  pic: { type: String, default: "https://firebasestorage.googleapis.com/v0/b/students-project-managem-80227.appspot.com/o/ProfilePictures%2FStudents%2Fbe35daf2-e25b-4c5b-b8af-a75408914379dummy%20image%204.png?alt=media&token=6fb403de-8b97-4856-9c87-67a7134c0d7e" },
  grNo: { type: String, required: true },
  year: { type: String, required: true },
  branch: { type: String, required: true },
});

const userModel = new mongoose.model("UserData", userSchema);

module.exports = userModel;
