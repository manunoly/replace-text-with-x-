// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

  function hideData(data, dataT) {
    let dataR;
    if (dataT == 'email') {
      dataR = data.split('@')[0];
    } else
      dataR = data;

    let finalD = dataR.slice(dataR.length-2);
    if (dataT == 'email')
      finalD = finalD  + '@' + data.split('@')[1];


    let i = 0;
    let newText = '';
    while(i < dataR.length-2){
      newText = newText + 'x'
      i = i + 1;
    }

    console.log(newText + finalD);
  } 

  hideData('manuel@gmail.com', 'email'); 
