const btnGenEl = document.querySelector(".btnGen");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnGenEl.addEventListener("click", () => {
    // console.log("Button clicked");  // Test button click
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    // console.log("Button clicked");  // Test button click
    copyPassword();
});

function createPassword(){
    // console.log("Button clicked");  // Test button click
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    const passwordLength = 16;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
        // console.log(randomNumber, password); // Test random number and password
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + "copied to clipboard!";
}

function copyPassword(){
    // console.log("Button clicked");  // Test button click
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}
