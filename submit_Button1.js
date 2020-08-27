function submitButtonFor1(){
    var state = 2;
    tennis_image = null;
    tabletennis_image = null;
    submitButton1.hide();
    greeting1.hide();
    greeting2.hide();
    greeting3.hide();
    greeting4.hide();
    greeting5.hide();
    input_name.hide();
    input_email.hide();
    input_phone.hide();

    //second page starts
    greeting6 = createElement('h2');
    greeting6.html("CHOOSE A SPORT IN WHICH YOU WANT A PARTNER IN.");
    greeting6.position(400, 130);
    greeting6.style('color:white');

    option1 = createButton("TENNIS");
    option1.position(650,200);
    option1.style('color:green');
    option1.style('font-size:30px');
    option1.style('background-color: (255)');
    option1.mouseClicked(levelsOfTheGame);

    option2 = createButton("TABLE TENNIS");
    option2.position(600,260);
    option2.style('color:red');
    option2.style('font-size:30px');
    option2.style('background-color: (255)');
    option2.mouseClicked(levelsOfTheGame);

    option3 = createButton("BASKETBALL");
    option3.position(610,320);
    option3.style('color: #b5651d');
    option3.style('font-size:30px');
    option3.style('background-color: (255)');
    option3.mouseClicked(levelsOfTheGame);

  option4 = createButton("CRICKET");
  option4.position(645,380);
  option4.style('color:green');
  option4.style('font-size:30px');
  option4.style('background-color: (255)');
  option4.mouseClicked(levelsOfTheGame);

  option5 = createButton("VOLLEY BALL");
  option5.position(600,440);
  option5.style('color:red');
  option5.style('font-size:30px');
  option5.style('background-color: (255)');
  option5.mouseClicked(levelsOfTheGame);

  option6 = createButton("SQUASH");
  option6.position(650,500);
  option6.style('color: #b5651d');
  option6.style('font-size:30px');
  option6.style('background-color: (255)');
  option6.mouseClicked(levelsOfTheGame);

 
  backButton1 = createButton("BACK");
  backButton1.position(230,180);
  backButton1.style('color:blue');
  backButton1.style('font-size:30px');
  backButton1.style('background-color: (255)');
  backButton1.mouseClicked(back_1);
}
function back_1(){
  greeting6.hide();
  option1.hide();
  option2.hide();
  option3.hide();
  option4.hide();
  option5.hide();
  option6.hide();
  backButton1.hide();

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



}
