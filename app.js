function pesquisar() {
  let section=document.getElementById("resultados-pesquisa")
  console.log(section);
  
  for(let dado of dados) {
  
  section.innerHTML = `
        <div class="item-resultado">
          <h2>
          <a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta"> ${dado.descricao}
          </p>
          <a href=${dado.link} target="_blank">Clique aqui<a/>
        </div>`
      }
  
  section.innerHTML = resultados
   
}
 

 










