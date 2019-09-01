const jumboDiv = document.getElementById('jumbo');
const formDiv = document.getElementById('form');
const cardDiv = document.getElementById('card');
const makeMagicBtn = document.getElementById('btn1');
const sortBtn = document.getElementById('btn2');

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
  <a  id='btn1'class="btn btn-success btn-lg" href="#" role="button">Make Magic</a>
</div>`;
PTD(JumboString,'jumbo');
}



const makeForm = () => {
  const formString =`
<form class="form-inline">
    <div class="form-group mb-2">
      <input type="text" readonly class="form-control-plaintext" id="name" value="Enter Your Name">
    </div>
    <div class="form-group mx-sm-5 mb-2">
      <input type="text" class="form-control" id="nameInputBox">
    </div>
    <button type="" id="sort" class="btn btn-primary mb-2">Sort</button>
  </form>`;
  PTD(formString,'form')
  $("#nameInputBox").focus();
};



const makeCard = () => {
    const formPrint = ` <div class="card bg-light mb-10" style="max-width: 18rem;">
    <div class="card-header text-center">Welcome to Hogwarts!</div>
    <div class="card-body text-center">
      <h1 class="card-title text-center">test</h1>
      <form>
          <div class="form-group">
            <label for="formGroupExampleInput"></label>
            <input type="text" class="form-control" id="formInput" placeholder="">
          </div>
        </form>
      <p class="card-text">Keeping Going</p>
      <button id="btn2" class="btn btn-primary btn-lg">Click Me 2 Please </button>
      </div>
  </div>`;
  PTD(formPrint,'card');
  $("#formInput").focus();
};

const makeMagicBtnEvent = () => {
  makeJumbo();
  $('#btn1').on('click',makeForm);
}
makeMagicBtnEvent();