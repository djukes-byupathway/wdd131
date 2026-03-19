const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value != "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = '❌';
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus()
        });
        li.append(deleteButton);
        list.appendChild(li);
        input.value = "";
    }
    input.focus();
});




// <button aria-label="Close" id="close-button">❌</button>