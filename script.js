// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;


// Add a row
function addR()
{
    let row = grid.insertRow();  // Insert a new row into the grid
    // Determine the number of columns based on the first row, default to 1 if no rows exist
    let cellCount = grid.rows.length > 1 ? grid.rows[0].cells.length : 1;
    // Add the correct number of cells (columns) to the new row
    for (let i = 0; i < cellCount; i++) 
    {
        let cell = row.insertCell();  // Insert a new cell into the row
        cell.style.backgroundColor = "white";  // Set default background color
        cell.addEventListener("click", function() 
        {
            colorCell(cell);  // Attach the colorCell function to the click event
        });
    }
    updateGridSize();  // Update grid size if necessary
}

// Add a column
function addC()
{
   // Loop through all existing rows and add a new column (cell) to each row
   for (let i = 0; i < grid.rows.length; i++) 
    {
        let cell = grid.rows[i].insertCell();  // Insert a new cell into each row
        cell.style.backgroundColor = "white";  // Set default background color
        cell.addEventListener("click", function() 
        {
            colorCell(cell);  // Attach the colorCell function to the click event
        });
    }
    updateGridSize();  // Update grid size if necessary
}


// Remove a row
function removeR()
{
    if (grid.rows.length > 0) 
    {
        grid.deleteRow(-1);  // Remove the last row in the grid
        updateGridSize();  // Update grid size if necessary
    }
    else
    {
       // If there are no rows to remove, notify the user
       alert("No rows to remove!");
    }
}


// Remove a column
function removeC()
{
    if (grid.rows.length > 0 && grid.rows[0].cells.length > 0) 
    {
        // Loop through all rows and remove the last column (cell) from each row
        for (let i = 0; i < grid.rows.length; i++) 
        {
            grid.rows[i].deleteCell(-1);  // Remove the last cell from each row
        }
        updateGridSize();  // Update grid size if necessary
    } else if (grid.rows.length > 0 && grid.rows[0].cells.length === 0) 
    {
        alert("No more columns to remove!");  // Show message if no columns left
    }
}

// Helper function to update or log the grid size
function updateGridSize() 
{
    console.log(`Grid size: ${grid.rows.length} rows and ${grid.rows[0]?.cells.length || 0} columns`);
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
            cell.style.backgroundColor = colorSelected ? colorSelected.toLowerCase() : "white";
        }
    }
    if (!colorSelected) 
    {
        alert("No color selected. Please select a color!");
    }
}

// Fill all cells
function fillAll()
{
    if (!colorSelected) 
    {
        alert("No color selected. Please select a color!");
        return;
    }
    // Ask for confirmation before filling all cells
    if (confirm("Are you sure you want to fill all the cells with the selected color?")) 
    {
        const cells = document.getElementsByTagName("td");
        // Loop through each cell and fill with the selected color
        for (let cell of cells) 
        {
            cell.style.backgroundColor = colorSelected.toLowerCase();
        }
    }
}


// Clear all cells
function clearAll()
{
   // Ask for confirmation before clearing all colors
   if (confirm("Are you sure you want to clear all the cells?")) 
    {
        const cells = document.getElementsByTagName("td");
        // Loop through each cell and reset the background color to white (default)
        for (let cell of cells) 
        {
            cell.style.backgroundColor = "white";
        }
    }   
}

/// Helper function for coloring individual cells
function colorCell(cell) 
{
    if (colorSelected) 
    {
        cell.style.backgroundColor = colorSelected.toLowerCase();  // Fill the cell with the selected color
    } else 
    {
        alert("Please select a color first!");
    }
}