function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('ligth')

  /*pagar tag img*/
  const img = document.querySelector("#profile img")
  /*substituir a imagem*/
  if (html.classList.contains("ligth")) {
    //se tiver ligth mode, adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-ligth.png")
    img.setAttribute("alt", "Foto do Zaio,Amarelo")
  } else {
    //se tiver sem ligth mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do zaio, de braços crusados, de camisa preta, e funto de nuturesa")

  }

}