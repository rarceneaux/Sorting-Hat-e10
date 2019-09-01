const jumboDiv = document.getElementById('jumbo');
const formDiv = document.getElementById('form');
const cardDiv = document.getElementById('card');
const makeMagicBtn = document.getElementById('makeMagic');
const sortBtn = document.getElementById('sort');
const expelStudent = document.getElementById('excel');



const PTD = (stringToPrint,divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
}

const houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slyther'];

const makeJumbo = () => {
  const JumboString =`<div class="jumbotron">
  <h1 class="display-4">Sorting Hat</h1>
  <p class="lead"> Calling All Wizards</p>
  <hr class="my-4">
  <p>Let your training Begin...</p>
  <a  id='makeMagic'class="btn btn-success btn-lg" href="#" role="button">Make Magic</a>
</div>`;
PTD(JumboString,'jumbo');
}


const makeForm = () => {
  const formString =`
<form class="form-inline">
    <div class="form-group mb-2">
      <input type="text" readonly class="form-control-plaintext" id="name" value="Enter Your Name">
    </div>
    <div>
      <input type="text" id="nameInputBox">
    </div>
    <button type="submit" id="sort" class="btn btn-primary mb-2">Sort</button>
  </form>`;
  PTD(formString,'form')
  $("#nameInputBox").focus();
  studentBtnEvent();
};



const makeCard = () => {
  const studentName = nameInputBox.value;
    let randomHouse = houses[Math.floor(Math.random() *houses.length)];
    let cardPrint = `<div class="card" style="width: 18rem;">
    <div class="card-header text-center">Welcome to Hogwarts!</div>
    <div class="card-body text-center">
      <h1 class="studentName text-center">${studentName}</h1>
      <form>
          <div class="form-group">
            <label for="formGroupExampleInput"></label>
            <h2 type="text"  id="house">${randomHouse}</h2>
          </div>
        </form>
      <button type="submit" id="excel" class="btn btn-danger btn-lg">Expel</button>
      </div>
  </div>`;
  PTD(cardPrint,'card');

};

const makeMagicBtnEvent = () => {
  makeJumbo();
  $('#makeMagic').on('click',makeForm);
};
makeMagicBtnEvent();


const studentBtnEvent = (event) => {
  $('#sort').on('click', makeCard); 
}
