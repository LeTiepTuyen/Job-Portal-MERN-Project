const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { promisify } = require("util");
const path = require("path");

const pipeline = promisify(require("stream").pipeline);

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
});

router.post("/profile", upload.single("file"), (req, res) => {
  const { file } = req;

  if (
    file.detectedFileExtension != ".jpg" &&
    file.detectedFileExtension != ".png" &&
    file.detectedFileExtension != ".jpeg"
  ) {
    res.status(400).json({ message: "invalid format" });
  } else {
    const filename = `${uuidv4()}${file.detectedFileExtension}`;

    pipeline(file.stream, fs.createWriteStream(`${__dirname}/../public/profile/${filename}`))
      .then(() => {
        res.send({
          message: "Profile image uploaded successfully",
          url: `/host/profile/${filename}`,
        });
      })
      .catch((err) => {
        res.status(400).json({ message: "Error while uploading" });
      });
  }
});

module.exports = router;
