import express from 'express';
import ffmpeg from 'fluent-ffmpeg';

const app = express();
app.use(express.json());

app.post('/process-video', (req,res) => {
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  if(!inputFilePath || !outputFilePath){
    res.status(400).send('Bad Request: Missing File Path');
  }

  // converting to 360p
  ffmpeg(inputFilePath)
    .outputOptions("-vf", "scale=-1:360")
    .on("end", () => {
      res.status(200).send("Processing finished succesfully.")
    })
    .on("error", (err) => {
      console.log(`An error occured ${err.message} `);
      res.status(500).send(`Internal Server Error ${err.message}`)
    })
    .save(outputFilePath);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});