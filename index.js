// function reverseSent(sentence){
//     var result = " ";
//     var splitStr = sentence.split(" ");
  
//     for (var i = splitStr.length - 1; i >= 0; i--){
//       result += splitStr[i] + " ";
//       var words = result;
//     }
//     return words;
//   }

function myFunction() {
    let str = "impossible. mean not does hard but hard, be to going It’s";
    let res = str.split(/\s/).reverse().join(" ");
    document.getElementById("demo").innerHTML = res;
  }

