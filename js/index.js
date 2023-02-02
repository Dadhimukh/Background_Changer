function changeBg(color) {
  document.body.style.backgroundColor = color;

  let txt = document.getElementsByClassName("text");

  let cbtn = document.getElementsByClassName("cbtn");

  if (color == "red" || color == "black") {
    for (let elm of txt) {
      elm.style.color = "white";
    }
  } else {
    for (let elm of txt) {
      elm.style.color = "black";
    }
  }

  if (color == "black" || color == "red") {
    for (let elm of cbtn) {
      elm.style.border = "1px solid white";
    }
  } else {
    for (let elm of cbtn) {
      elm.style.border = "1px solid black";
    }
  }
}
