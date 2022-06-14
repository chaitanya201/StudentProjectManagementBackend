const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: "String",
  email: "String",
  position: { type: "String", default: "admin" },
  password: "String",
  pic: {
    type: "String",
    default:
      "https://firebasestorage.googleapis.com/v0/b/students-project-managem-80227.appspot.com/o/ProfilePictures%2FStudents%2Fbe35daf2-e25b-4c5b-b8af-a75408914379dummy%20image%204.png?alt=media&token=6fb403de-8b97-4856-9c87-67a7134c0d7e",
  },
});

const adminModel = new mongoose.model("AdminData", adminSchema);
module.exports = adminModel;
