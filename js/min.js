/* particlesJS */
particlesJS.load('particles-js', '../js/particles.json');


document.getElementById("Execute").addEventListener("click" , ()=> {
  const rover = new Rover(4, 2, 'EAST');               //instance class by initial values
  document.querySelector('#commandInput').value=''     //clear value in input;
})




class Rover {
  constructor(getX, getY, getDirection) {
    this.x = getX;                                                 //global varibrls It bears the value of the sent x to function
    this.y = getY;                                                 //global varibrls It bears the value of the sent y to function
    this.direction = getDirection;                                 //global varibrls It bears the value of the sent direction to function
    this.command = document.querySelector('#commandInput').value   //global varibrls It bears the value of User written
    this.commandInput = this.command.toUpperCase();                //converts a string to uppercase letters
  console.log(this.commandInput);

    this.yourDirection = {
      'NORTH': { x: 1, y: 0 },                  //North direction
      'EAST': { x: -1, y: 0 },                   //EAST direction
      'SOUTH': { x: 0, y:1 },                 //SOUTH direction
      'WEST': { x: 0, y: -1 }                   //WEST direction
    };
    
    this.actions = {
      'F': { move: 1, rotate: 0 },              //Go forward              
      'B': { move: -1, rotate: 0 },             //Back to back
      'R': { move: 0, rotate: 1 },              //Move to the right
      'L': { move: 0, rotate: -1 }              //Move to the left
    };

    this.executeCommands( this.commandInput) ;  //call function executeCommands and sent to her value of User written
  }

  executeCommands(commandInput) {
    for (let command of commandInput) {         //loop in commandInput
    
        const action = this.actions[command];
        this.x += action.move + this.yourDirection[this.direction].x;
        this.y += action.move + this.yourDirection[this.direction].y;

        const yourDirection = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
        const currentDirectionIndex = yourDirection.indexOf(this.direction); 
        console.log(currentDirectionIndex);                                                                     //geting index of Direction Arry
        const newDirectionIndex = (currentDirectionIndex + action.rotate ) % yourDirection.length;
        this.direction = yourDirection[newDirectionIndex];                                                      //final Direction It will appear to the user
        document.getElementById('roverPosition').innerText = `Rover's Position: ${this.getPosition()}`;        //the resulted from the function getPosition will be represented in <p>
    }
  }

  getPosition() {
   
    return `(${this.x}, ${this.y}) ${this.direction}`;
   
  }
}

