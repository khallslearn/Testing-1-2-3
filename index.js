/*Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.*/


var number=function(array){
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }
