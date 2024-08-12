const divKey = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  const tecla = event.key.toLowerCase();

  if (tecla === "a") {
    divKey.style.backgroundColor = "pink";
  } else if (tecla === "s") {
    divKey.style.backgroundColor = "orange";
  } else if (tecla === "d") {
    divKey.style.backgroundColor = "skyblue";
  } else if (tecla === "q") {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = "purple";
    nuevoDiv.style.border = "2px solid black";
    document.body.appendChild(nuevoDiv);
  } else if (tecla === "w") {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = "gray";
    nuevoDiv.style.border = "2px solid black";
    document.body.appendChild(nuevoDiv);
  }
  else if (tecla === "e") {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = "brown";
    nuevoDiv.style.border = "2px solid black";
    document.body.appendChild(nuevoDiv);
  }
});

