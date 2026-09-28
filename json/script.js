 
fetch("menu.json")
  .then(response => response.json())
  .then(menu => {

    localStorage.setItem("menuData", JSON.stringify(menu));
    let output = "<h3>Restaurant Menu:</h3>";

    for (let i = 0; i < menu.length; i++) {
      output += `
        <p><strong>Name:</strong> ${menu[i].mealName}</p>
        <p><strong>Price:</strong> ${menu[i].Price}</p>
        <p><strong>Availability:</strong> ${menu[i].Availability}</p>
        <hr>
      `;
    }

    document.getElementById("Info").innerHTML = output;
  });

