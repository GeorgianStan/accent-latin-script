import fs from "fs";

const charMap = {
  Þ: "Ț",
  þ: "ț",
  º: "ș",
};

const [inputPath, outputPath] = process.argv.slice(2);

const input = fs.readFileSync(inputPath, "latin1");

let output = "";

input.split("").forEach((char) => {
  const normalizedChar = charMap[char] ?? char;
  output += normalizedChar;
});

fs.writeFileSync(outputPath, output);
