function toUpperCase() {
    const text = document.getElementById("text").innerText;
    const result = text.toUpperCase();
    document.getElementById("result").innerText = result;
}

function toLowerCase() {
    const text = document.getElementById("text").innerText;
    const result = text.toLowerCase();
    document.getElementById("result").innerText = result;
}

function search() {
    const searchTerm = prompt("Enter the search term:");
    const text = document.getElementById("text").innerText;
    if (text.includes(searchTerm)) {
        document.getElementById("result").innerText = `${searchTerm} found!`;
    } else {
        document.getElementById("result").innerText = `${searchTerm} not found!`;
    }
}

function textLength() {
    const text = document.getElementById("text").innerText;
    const length = text.length;
    document.getElementById("result").innerText = `Length: ${length}`;
}
