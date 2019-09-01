const jumboDiv = document.getElementById('jumbo');
const formDiv = document.getElementById('form');
const cardDiv = document.getElementById('card');

const PTD = (stringToPrint,divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
}

const houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slyther'];


