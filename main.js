const jumboDiv = document.getElementById('jumbo');
const formDiv = document.getElementById('form');
const cardDiv = document.getElementById('card');
const makeMagicBtn = document.getElementById('makeMagic');
const sortBtn = document.getElementById('sort');

// Print to DOM
const PTD = (stringToPrint,divId) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML += stringToPrint;
}
// House Array
const houses = ['Gryffindor','Hufflepuff','Ravenclaw','Slyther'];

// Make Jumbo runs on page load
const makeJumbo = (e) => {
  const JumboString =`<div class="jumbotron">
  <h1 class="display-4">Sorting 🎩Hat</h1>
  <h2 > Calling All Wizards</h2>
  <hr class="my-4">
  <p>Let Your Training Begin....</p>
  <a  id='makeMagic'class="btn btn-success btn-lg" href="#" role="button">Make Magic</a>
</div>`;
PTD(JumboString,'jumbo');
}
makeJumbo();

// Being called on line 71
const makeForm = (e) => {
  let formString =`
<form class="form-inline">
    <div class="">
      <input type="text" readonly class="form-control-plaintext" id="name" value="Enter First Year's Name">
    </div>
    <div>
      <input type="text" id="nameInputBox">
    </div>
    <button type="submit" id="sort" class="btn btn-success mb-2">Sort</button>
  </form>`;
  PTD(formString,'form')
  $("#nameInputBox").focus();
  studentBtnEvent();
};


//  Being Called on Line 75
const makeCard = () => {
  const studentName = nameInputBox.value;
    let randomHouse = houses[Math.floor(Math.random() *houses.length)];
    let cardPrint = `<div class="card" style="width: 20rem;">
    <div class="card-header text-center">Welcome to Hogwarts!</div>
    <div class="card-body text-center">
    <form>
      <h1 class="studentName text-center">${studentName}</h1>
          <div class="form-group">
            <label for="formGroupExampleInput"></label>
            <h2 type="text"  id="house">${randomHouse}</h2>
          </div>
        </form>
      <button  type="submit" class="expel">Expel</button>
      </div>
  </div>`;
  PTD(cardPrint,'card');
  removeCard();
};


// Calling after Jumbo and make magic is created in Make Jumbo FN
const makeMagicBtnEvent = (e) => {
  $('#makeMagic').on('click',makeForm);
  // $('#makeMagic').off();
};
makeMagicBtnEvent();

// Called @ Line 39 Make Form FN
const studentBtnEvent = () => {
  $('#sort').on('click', makeCard);
};

// Calling on line 62 in Make Card FN
const removeCard = () =>{
  const cardsToRemove = document.getElementsByClassName('expel');
  for (let i =0;i<cardsToRemove.length;i++){
    const deleteMe = cardsToRemove[i];
    deleteMe.addEventListener('click' ,(e) =>{
      const btnClicked = e.target;
      const cardToRemove = btnClicked.parentNode.parentNode;
      cardToRemove.remove();
    })
  }
}
//expelStudent Event Listener
const expelStudent = () => {
  $(".expel").on('click', removeCard);
  }
  expelStudent();