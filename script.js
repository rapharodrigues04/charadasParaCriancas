fetch('trocadilhos.json')
  .then(response => response.json())
  .then(charadas => {
    const botaoCharada = document.getElementById('botao-charada');
    const perguntaElement = document.getElementById('pergunta');
    const respostaElement = document.getElementById('resposta');

    shuffle(charadas);

    let index = 0;

    botaoCharada.addEventListener('click', () => {
      if (botaoCharada.textContent === 'Mostrar Pergunta') {
        perguntaElement.textContent = charadas[index].pergunta;
        respostaElement.textContent = '';
        botaoCharada.textContent = 'Mostrar Resposta';
      } else {
        respostaElement.textContent = charadas[index].resposta;
        botaoCharada.textContent = 'Mostrar Pergunta';
        index++;
        if (index >= charadas.length) {
          shuffle(charadas);
          index = 0;
        }
      }
    });
  })
  .catch(error => {
    console.error(error);
    alert('Charada não pode ser carregada. Verifique o console para mais detalhes.');
  });

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}





// const fs = require('fs');

// fs.readFile('trocadilhos.json', (err, data) => {
//   if (err) throw err;

//   const jsonArray = JSON.parse(data);

//   const qtdItens = jsonArray.length;

//   console.log(`O array de JSON contém ${qtdItens} itens.`);
// });
