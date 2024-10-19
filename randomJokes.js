let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn-2");
let jokes = document.querySelector("#jokes");

let url = "https://icanhazdadjoke.com/";
let url2 = "https://api.imgflip.com/get_memes?width=60%";
async function getJokes() {
    try {
        const header = { headers: { Accept: "application/json" } };
        let res = await axios.get(url, header);
        // console.log("joke: ", res.data.joke);
        jokes.style.backgroundImage = `url(${url})`;
        jokes.style.width = "90%";
        jokes.innerText = res.data.joke;
    } catch(e) {
        console.log("error -", e);
    }
}

async function getMemes() {
    try {
        let res = await axios.get(url2);
        let i = Math.ceil(Math.random()*100);
        let url = res.data.data.memes[i].url;
        jokes.innerText = '';
        jokes.style.width = "60%";
        jokes.style.backgroundSize = "cover";
        jokes.style.backgroundImage = `url(${url})`;
    } catch(e) {
        console.log("error -", e);
    }
}

getMemes();

btn2.addEventListener("click", getMemes);
btn.addEventListener("click", getJokes);