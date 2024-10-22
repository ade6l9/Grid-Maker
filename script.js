// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() 
{
    const table = document.getElementById("grid");
    const newRow = table.insertRow();
    // Ensure the new row has the same number of columns as existing rows
    // If numCols is greater than 0, use numCols, otherwise default to 1 column
    const cols = numCols > 0 ? numCols : 1;
    // Add cells (columns) to the new row
    for (let i = 0; i < cols; i++) 
    {
        const newCell = newRow.insertCell();
        newCell.style.backgroundColor = "white";  // Set default background cell color
        newCell.onclick = () => colorCell(newCell);  // Attach click event for coloring
    }
    // Increment the row count after adding the new row
    numRows++;
}

// Add a column
function addC() 
{
    const table = document.getElementById("grid");
    // If no rows exist, create one row first (with 1 column by default)
    if (numRows === 0) 
    {
        addR();  // Adds the first row and column
    } else 
    {
        // Add one column to each existing row
        for (let i = 0; i < numRows; i++) 
        {
            const row = table.rows[i];
            const newCell = row.insertCell(); 
            newCell.style.backgroundColor = "white"; 
            newCell.onclick = () => colorCell(newCell); 
        }
    }
    numCols++;
}

// Remove a row
function removeR() 
{
    const table = document.getElementById("grid");
    // Check if there are any rows to remove
    if (numRows > 0) 
    {
        // Remove the last row from the table
        table.deleteRow(-1); // -1 ensures that the last row is always removed
        numRows--;
        // If no rows are left after removal, reset numCols to 0
        if (numRows === 0) 
        {
            numCols = 0;
        }
    } else 
    {
        // If there are no rows to remove, notify the user 
        alert("No rows to remove!");
    }
}

// Remove a column
function removeC() 
{
    const table = document.getElementById("grid");
    // Check if there are columns to remove
    if (numCols === 0 || numRows === 0) {
        alert("No columns to remove!");
        return;
    }
    // Loop through each row and remove the last column
    for (let i = 0; i < numRows; i++) {
        table.rows[i].deleteCell(-1);  // Remove last cell in each row
    }
    numCols--;
}

// Set global variable for selected color
function selectColor()
{
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU()
{
    const cells = document.getElementsByTagName("td");
    // Loop through each cell and fill only if it's uncolored 
    for (let cell of cells) 
    {
        if (cell.style.backgroundColor === "white" || cell.style.backgroundColor === "") 
        {
            cell.style.backgroundColor = colorSelected.toLowerCase();
        }
    }
}

// Fill all cells
function fillAll()
{
    const cells = document.getElementsByTagName("td");
    // Loop through each cell and fill with the selected color
    for (let cell of cells) 
    {
        cell.style.backgroundColor = colorSelected.toLowerCase();
    }
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}