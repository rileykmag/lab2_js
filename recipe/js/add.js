function recipeFunc() {
    // Find the element that contains the text input box for the recipe name and stores a reference to it in a variable
    var recipeBox = document.getElementById('recipeName');

    // Get the value that the user typed into the text input box for the recipe name and stores a reference to it in a variable
    var recipeName = recipeBox.value;

    // Find the element that contains the text input box for the recipe link and stores a reference to it in a variable
    var linkBox = document.getElementById('link');
    // Get the value that the user typed into the text input box for the recipe link and stores a reference to it in a variable
    var recipeLink = linkBox.value;

    // If both values the user typed into the text input boxes are not empty, do:
    //   - Create a new list item
    //   - Create a new hyperlink element
    //   - Set the text of the new hyperlink to the value the user typed into the text input for the recipe name
    //   - Set the href property of the new hyperlink to the value the user typed into the text input for the recipe link
    //   - Attach the new hyperlink element to the new list item element
    //   - 
     
// Find parent element (i.e, the unordered list of recipes) where the new element will be added
    //   - Add the new list item element to the parent element
    if (recipeName && recipeLink) {
        var newListItem = document.createElement('li');
        var newLink = document.createElement('a');
        newLink.textContent = recipeName;
        newLink.href = recipeLink;
        newListItem.appendChild(newLink);
        var parent = document.getElementById('recipeList');
        parent.appendChild(newListItem);
    }

    // Select the element that contains the button to add a recipe
    var addButton = document.getElementById('addRecipeBtn');


};