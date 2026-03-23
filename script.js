const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

img.onload = function () {
  const pieces = 6;
  const pieceWidth = canvas.width / pieces;

  for (let i = 0; i < pieces; i++) {
    ctx.drawImage(
      img,
      i * pieceWidth,
      0,
      pieceWidth,
      canvas.height,
      i * pieceWidth + (Math.random() * 20 - 10),
      Math.random() * 20 - 10,
      pieceWidth,
      canvas.height,
    );
  }
};
