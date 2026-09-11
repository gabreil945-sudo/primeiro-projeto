function ToggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/gabriel.jpeg")
  } else {
    img.setAttribute("src", "./assets/gabriel2.jpeg")
  }
}
