let on = false;
let btn = document.getElementById("btn");
let reset = document.getElementById("reset");
let nn = document.getElementById("num");

reset.addEventListener('click',()=>init());

function go() {
	btn.addEventListener('click', function () {
		let status = btn.getAttribute("class");
		if (status === 'off') {
			btn.setAttribute("style","background:red");
			btn.classList.remove("off");
			btn.classList.add("on");
			on = true;
		} else {
			btn.setAttribute("style","background:green");
			btn.classList.remove("on");
			btn.classList.add("off");
			on = false;
		}
	});
}

let w,columns,rows,board,next;

function setup() {

	vw = window.innerWidth - 10;
	vh = window.innerHeight - 10;
	
	createCanvas(vw,vh);

	w = 10;
	columns = floor(width / w);
	rows = floor(height / w);
	board = new Array(columns);

	// first board
	for (let i = 0; i < columns; i++) {
		board[i] = new Array(rows);
	}
	
	// second board
	next = new Array(columns);
	for (i = 0; i < columns; i++) {
		next[i] = new Array(rows);
	}

	init();
}

function draw() {
  background('rgba(255,255,255,0)');
  generate();
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {
      if ((board[i][j] == 1)) {fill('rgba(255,255,255, 0.25)');}
      else {fill('rgba(0,0,0,0.1)');}
      noStroke();
      rect(i * w, j * w, w-1, w-1);
    }
  }

}

// add elements on mouse
function mousePressed() {
	mx = Math.floor(mouseX / w);
	my = Math.floor(mouseY / w);
	board[mx][my] = 1;
}

// Fill board randomly
function init() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      //Lining the edges with 0s
      if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
      //Filling the rest randomly
      else board[i][j] = floor(random(2));
      next[i][j] = 0;
    }
  }
}

// The process of creating the new generation
function generate() {

	if (on === false) {return}
  // Loop through every spot in our 2D array and check spots neighbors
  for (let x = 1; x < columns - 1; x++) {
    for (let y = 1; y < rows - 1; y++) {
      // Add up all the states in a 3x3 surrounding grid
      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }

      // A little trick to subtract the current cell's state since
      // we added it in the above loop
      neighbors -= board[x][y];
      // Rules of Life
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // Loneliness
      else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // Overpopulation
      else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // Reproduction
      else                                             next[x][y] = board[x][y]; // Stasis
    }
  }

  // Swap!
  let temp = board;
  board = next;
  next = temp;
  nn.innerHTML++;
}