function levelsOfTheGame(){
    greeting6.hide();
    option1.hide();
    option2.hide();
    option3.hide();
    option4.hide();
    option5.hide();
    option6.hide();
    backButton1.hide();

   
    level = createSlider(0, 255, 100);
    level.position(440,400);
    level.style('width', '500px');
   //level.style('height', '200px');
        
    greeting7 = createElement('h1');
    greeting7.html("DRAG THE SLIDER TO THE LEVEL OF WHAT YOU THINK ABOUT YOUR GAME... IS IT GREAT OR ARE YOU JUST STARTING TO PLAY IT(DRAG IT ACCORDING TO YOUR LEVEL).")
    greeting7.position(450,130);
    greeting7.style('color:white');
    greeting7.style('margin-right:450px');

    greeting8 = createElement('h1');
    greeting8.html("beginner");
    greeting8.position(380,400);
    greeting8.style('color:green');

    greeting9 = createElement('h1');
    greeting9.html("amateur");
    greeting9.position(640,400);
    greeting9.style('color:white');

    greeting10 = createElement('h1');
    greeting10.html("professional");
    greeting10.position(890,400);
    greeting10.style('color:red');

    submitButton2 = createButton("Submit"); 
    submitButton2.position(650,500);
    submitButton2.style('color:blue');
    submitButton2.style('font-size:30px');
    submitButton2.style('background-color: (255)');
    submitButton2.mouseClicked(submitButtonFor2);

    backButton2 = createButton("BACK");
    backButton2.position(230,180);
    backButton2.style('color:blue');
    backButton2.style('font-size:30px');
    backButton2.style('background-color: (255)');
    backButton2.mouseClicked(back_2);
}
function back_2(){
  greeting7.hide();
  greeting8.hide();
  greeting9.hide();
  greeting10.hide();
  backButton2.hide();
  submitButton2.hide();
  level.hide();

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