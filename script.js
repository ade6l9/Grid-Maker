// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() 
{
    const table = document.getElementById("grid");
    const newRow = table.insertRow();
    const cols = numCols > 0 ? numCols : 1; 
    for (let i = 0; i < cols; i++) 
    {
        const newCell = newRow.insertCell();
        newCell.style.backgroundColor = "white";
        newCell.onclick = () => colorCell(newCell);
    }
    numRows++;
}

// Add a column
function addC() 
{
    const table = document.getElementById("grid");

    // If no rows exist, create one row first and add a single column to it
    if (numRows === 0) 
    {
        addR();  // This will add a row with the correct number of columns (initially 1)
    } else 
    {
        // Loop through each row and add one column (cell) to each row
        for (let i = 0; i < numRows; i++) 
        {
            const row = table.rows[i];
            const newCell = row.insertCell();  // Add one new cell (column) to each row
            newCell.style.backgroundColor = "white";  // Set default background color
            newCell.onclick = () => colorCell(newCell);  // Add click event for coloring
        }
    }
    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}