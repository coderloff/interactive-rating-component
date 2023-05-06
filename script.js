const submitButton = document.getElementById("submit");
const ratingCard = document.getElementById("rating");
const thankYouCard = document.getElementById("thank-you");
const rates = document.getElementsByClassName("btn-rate");
const rateSpan = document.getElementById("rate-result");
let rate = 0
for (let i = 0; i < rates.length; i++) {
    rates[i].addEventListener("click", ()=>{
        rate = i+1;
        rateSpan.innerHTML = rate;
    })
}
rateSpan.innerHTML = rate;
submitButton.addEventListener("click", ()=>{
    ratingCard.classList.remove("active");
    thankYouCard.classList.add("active");
});