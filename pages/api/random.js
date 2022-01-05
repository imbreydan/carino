import { readdir } from "fs/promises";
import path from "path";

const FOLDER = path.resolve("./public", "pets");
const EXTENSIONS = ["png", "jpeg", "jpg", "jfif", "gif"];

export default async function getRandomPet(req, res) {
  let files = await readdir(FOLDER);

  const images = files
    .filter((fileName) => EXTENSIONS.includes(fileName.split(".").pop()))
    .map((fileName) => path.join("/", "pets", fileName));

  const image = images[Math.floor(Math.random() * images.length)];

  res.status(200).json({ length: images.length, src: image });
}
