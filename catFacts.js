let url = "https://catfact.ninja/fact/";
let url2 = "https://api.thecatapi.com/v1/images/search"


async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log("fact about cat: ", res.data.fact);
        box.style.background = ``;
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center";
        box.style.width = `90%`;
        box.innerText = res.data.fact;
    } catch (e) {
        console.log("error -", e);
        return "No fact found";
    }
}

async function catImages() {
    try {
        let res = await axios.get(url2);
        // console.log(res.data[0].url);
        let imageUrl = res.data[0].url;
        box.innerText = ""
        box.style.background = `url(${imageUrl})`;
        box.style.width = `60%`;
        box.style.backgroundSize = "cover";
        
    } catch (e) {
        console.log("error -", e);
        return "No fact found";
    }
}

getFacts();
catImages();

let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn-2");
let box = document.querySelector("#fact");
btn.addEventListener("click", getFacts)
btn2.addEventListener("click", catImages);