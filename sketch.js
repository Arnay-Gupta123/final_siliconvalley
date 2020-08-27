
var submitButton1,backButton1, backButton2;
var greeting1,greeting2,greeting3,greeting5,input_name,input_email,input_phone;//first page greetings
var greeting6, option1, option2, option3, option4, option5, option6,tennis_image,tabletennis_image, basketball_image; //second page option for sports
var greeting7,greeting8,greeting9,greeting10,level,submitButton2;
var canvas;
var greeting11;


function preload(){
  tennis_image = loadImage('tennis.jpeg');
  tabletennis_image = loadImage('tabletennis.jpeg');
  basketball_image = loadImage('basketball.jpeg');
}

function setup() {
  
  canvas = createCanvas(displayWidth,displayHeight);

  submitButton1 = createButton("Submit"); 
  submitButton1.position(700,380);
  submitButton1.style('color:blue');
  submitButton1.style('font-size:30px');
  submitButton1.style('background-color: (255)');
  submitButton1.mouseClicked(submitButtonFor1);

  greeting1 = createElement('h2'); 
  greeting1.html("HERE TO GET YOURSELF A PARTNER OR BOOK A SPORTS COURT IN YOUR SOCEITY? ");
  greeting1.position(320,140); 
  greeting1.style('color:white');
  greeting2 = createElement('h2');
  greeting2.html("WELL THEN YOU ARE AT THE RIGHT PLACE.");
  greeting2.position(490,190);
  greeting2.style('color:white');
  
  greeting3 = createElement('h3'); // GREETINGS(NAME)
  greeting3.html("NAME")
  greeting3.position(450,280);
  greeting3.style('color:white');

  input_name = createInput("ENTER YOUR NAME");
  input_name.position(450,320);
  input_name.style('color:red');

  greeting4 = createElement('h3'); 
  greeting4.html("E-mail")
  greeting4.position(450,350);
  greeting4.style('color:white');

  input_email = createInput("ENTER YOUR E-MAIL");
  input_email.position(450,390);
  input_email.style('color:green');

  greeting5= createElement('h3'); // GREETINGS(PHONE_NO.)
  greeting5.html("Phone Number:");
  greeting5.position(450,420);
  greeting5.style('color:white');

  input_phone = createInput("PHONE NUMBER"); // INPUT NAME
  input_phone.position(450,460);
  input_phone.style('color:blue');

  background("black");  

}
// first page ends
function draw() {
  image(tennis_image,200,550);
  image(tabletennis_image,600,550);
  image(basketball_image,1000,550,245,180);

}
//second page starts 



