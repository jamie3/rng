import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { MersenneTwister19937, Random } from "random-js";

const random = new Random(MersenneTwister19937.autoSeed());
const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

server.post("/", (req: Request, res: Response) => {
  const result = random.integer(Number(req.body.start), Number(req.body.end));

  res.json(result);
});

server.listen(port, () => {
  console.log(`RNG listening on port ${port}!`);
});
