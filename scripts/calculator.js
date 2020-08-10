
// standard hash and randomization functions - these are NOT MINE

function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

function calculate() {
  var name1 = prompt("Enter your name").toLowerCase().split(" ").join("");
  var name2 = prompt("Enter their name").toLowerCase().split(" ").join("");
  // var names
  // if (name1 > name2) {
  //     names = name1 + name2;
  // } else {
  //     names = name2 + name1;
  // }

  comb1 = name1 + name2
  comb2 = name2 + name1

  var seed1 = xmur3(comb1);
  var rand1 = mulberry32(seed1());

  var seed2 = xmur3(comb2);
  var rand2 = mulberry32(seed2());

  score1 = Math.floor(rand1() * 100);
  score2 = Math.floor(rand2() * 100);

  var score

  if (score1 > score2) {
    score = score1
  } else {
    score = score2
  }

  exc1 = ["james", "jake", "jakefletcher", "jamesfletcher"];
  exc2 = ["shannon", "shannonlee"];

  if((exc2.includes(name1) && exc1.includes(name2)) || (exc2.includes(name2) && exc1.includes(name1))) {
      score = 100;
  }

  alert("Your <3 score is " + score + "%");

}
