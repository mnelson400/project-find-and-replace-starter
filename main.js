
const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");
const replaceOneButton = document.querySelector(".replace-one-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell");
}

// YOUR CODE GOES HERE

let match = 0;

replaceAllButton.addEventListener ('click', function () {

    let searchText = findInput.value;

    let replaceText = replaceInput.value;

    for (let outerArray = 0; outerArray < rowElements.length; outerArray += 1) {

        let currentRowElement = rowElements [outerArray];    

        let resultCellElements = getCellElements (currentRowElement);

        for (let innerArray = 0; innerArray < resultCellElements.length; innerArray += 1) {

            let cellData = resultCellElements[innerArray];

            let cellIncludes = cellData.innerHTML;

            if (cellIncludes.includes (searchText)) {

                cellData.innerHTML = cellIncludes.replace (searchText, replaceText);

                match = match + 1;
            }
        }
    } 
    alert ('There are ' + match + ' instances of ' + searchText + " found." )
})

replaceOneButton.addEventListener ('click', function () {

let searchText = findInput.value;

let replaceText = replaceInput.value;

for (let outerArray = 0; outerArray < rowElements.length; outerArray += 1) {

    let currentRowElement = rowElements [outerArray];    

    let resultCellElements = getCellElements (currentRowElement);

    for (let innerArray = 0; innerArray < resultCellElements.length; innerArray += 1) {

        let cellData = resultCellElements[innerArray];

        let cellIncludes = cellData.innerHTML;

        if (cellIncludes.includes (searchText)) {

            cellData.innerHTML = cellIncludes.replace (searchText, replaceText);

            return;
        }
    }
}
})

// 1. Add a click event listener to the replaceAllButton.

// 2. On click but outside of a loop, assign the values of the two input 
//     textboxes ( findInput and replaceInput), so that you are only retrieving 
//     these values once per click. 

// 3. Write a loop which loops over the rowElements array (which is already 
//     provided in the starter code).

// 4. Inside this loop, use the getCellElements() function (already provided 
//     in the starter code) and assign the resulting array of cell elements 
//     to a variable.

// 5. Write a nested loop which loops over the array of cell elements.

// 6. For each cell element, check if a cell contains the user-provided 
//     search string. Use the string method includes().

// 7. If a cell does contain the user-provided search string, use innerHTML 
//     and the string method replace() to replace the user-provided search string 
//     with the user-provided replacement string.1

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
