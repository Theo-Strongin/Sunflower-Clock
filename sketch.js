function setup() {
  createCanvas(600, 600);
  myminute = minute()

}
myminute = -1

function draw() {
  circledi = 200
  circleheight = height / 2 - 100

  background(160, 220, 255)
  noStroke()
  fill(0, 120, 0)
  horizon = 50
  rect(0, 2 * height / 3 + horizon, width, height / 3);
  fill(75, 75, 25)
  stemdown = 100
  ellipse(width / 2, 2 * height / 3 + horizon + stemdown, 70, 20)
  fill(0, 200, 0)
  steml1 = 300
  rect(width / 2 - 10, 2 * height / 3 + horizon + stemdown, 20, -steml1)
  fill(58, 95, 11)
  alt = 1
  for (let k = 0; k < Math.floor(hour()/2); k++) {
    console.log(hour()/2)
    push()
    stroke(1)
    let len1 = 120
    let stem2 = map(k, 0, 12, 0, 175)
    translate(width / 2, height / 2 + 220 - stem2);
    //triangle(0,steml,-20,10+steml,-40,20+steml)
    if (alt == 1) { //right leaves
      triangle(0, 0, circledi / 2, -2, circledi, 10)
      triangle(0, 0, circledi / 2, circledi / 6, circledi, 10)
      triangle(9 * circledi / 12, 20, 12 * circledi / 12, 10, 13 * circledi / 12, -circledi / 12)
      alt = 0
    } else if (alt == 0) { //left leaves
      triangle(0, -1, -circledi / 2, -3, -circledi, 9)
      triangle(0, -1, -circledi / 2, circledi / 6, -circledi, 9)
      triangle(-9 * circledi / 12, 20, -12 * circledi / 12, 10, -13 * circledi / 12, -circledi / 12)
      alt = 1
    }
    //ellipse(0,0,8,50)
    pop()
  }

  fill(255, 170, 0)
  
  if (myminute != minute()){
    console.log(minute())
    myminute = minute()

  }

  for (let i = 0; i < second(); i++) { //petals
    // let mylist = []
    push()
    stroke(1)
    let angle = map(i, 0, 59, 0,  4*TWO_PI);
    let cos_a = cos(angle);
    let sin_a = sin(angle);
    translate(width / 2, circleheight);
    applyMatrix(cos_a, sin_a, -sin_a, cos_a, circledi * sin_a / 1.5, -circledi * cos_a / 1.5);
    ellipse(0, 0, circledi / 6, circledi / 2)

    strokeWeight(1)
    line(-.75*circledi / 12, -2*circledi / 12, 0, -circledi / 3)

    line(.75*circledi / 12, -2*circledi / 12, 0, -circledi / 3)

    noStroke()
    fill(255,185,0)
    triangle(-.75*circledi / 12+1, -2*circledi / 12, .75*circledi / 12-1, -2*circledi / 12, 0, -circledi / 3)
    //stroke
    pop()
  }

  
        fill(92, 64, 51)

  circle(width / 2, circleheight, circledi)

    fill(255, 170, 0)

  for (j = 0; j < minute(); j++) { //spiral
    push()
    let angle = map(j, 0, 59, 0, 7 * TWO_PI);
    let distance = map(j, 0, 59, 20, circledi / 2 - 3);
    let cos_a = cos(angle);
    let sin_a = sin(angle);
    translate(width / 2, circleheight);
    applyMatrix(cos_a, sin_a, -sin_a, cos_a, distance * sin_a, -distance * cos_a);
    circle(0, 0, 6)
    pop()
  }

}
