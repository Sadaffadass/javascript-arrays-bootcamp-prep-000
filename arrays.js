var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'
  ];
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
var destructivelyAddElementToBeginningOfArray = ["array", "element"];
destructivelyAddElementToBeginningOfArray.push("array");