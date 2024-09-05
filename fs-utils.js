import fs from "fs";

const createDir = () => {
  try {
    if (!fs.existsSync("files")) {
      fs.mkdirSync("files");
    }

    let date = new Date().toString();
    let textDate = date.toString();
    let txt = textDate.split(":").join("-");
    fs.writeFileSync(`./files/${txt}.txt`, `TimeStamp : ${Date.now()}`);
  } catch (error) {
    console.log(`Error creating Dir : ${error.message}`);
  }
};

const readFolder = (folderName) => {
  try {
    const files = fs.readdirSync(folderName);
    return files;
  } catch (error) {
    console.log(`Error reading: ${error.message}`);
  }
};

export { createDir, readFolder };
