let url = "https://dog.ceo/api/breeds/image/random";
let url2 = "https://dogapi.dog/api/v2/facts?limit=1";
let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn-2");
let image = document.querySelector("#images");

async function getDogImages() {
    try {
        let res = await axios.get(url);
        let link = res.data.message;
        // console.log(res.src.fact);
        image.innerText = "";
        image.style.width = "60%";
        image.style.backgroundImage = `url(${link})`;
    } catch (e) {
        console.log("error -", e);
        return "No image found";
    }
}

async function getDogFacts() {
    try {
        let res = await axios.get(url2);
        let link = res;
        console.log(res.data.data[0].attributes.body);
        image.style.backgroundImage = ``;
        image.style.width = "90%";
        image.innerText = res.data.data[0].attributes.body;
    } catch (e) {
        console.log("error -", e);
        return "No image found";
    }
}

btn.addEventListener("click", getDogImages);
btn2.addEventListener("click", getDogFacts);