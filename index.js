new Glider(document.querySelector(".glider"), {
  slidesToShow: "1",
  slidestoScroll: "",
  draggable: true,
  dots: "#dots",
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 840,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: "3",
        slidesToScroll: "3",
      },
    },
  ],
});


(function beginScript() {
    let div = document.getElementById('fix-it-button')
    div.addEventListener('click', (e) => {
        data.clicks += 1
        console.log(data.clicks)
        if (data.clicks === 1) {
            firstAttempt()
        } else if (data.clicks > 2) {
            // otherEvents()
        }
    })
})()

let data = {
    clicks: 0,
}

function firstAttempt () {
    let loader = document.querySelector('.loader')
    let div = document.createElement('div')
    div.classList.add('progress')
    div.innerHTML = `<div class="progress-value"></div>`
    loader.appendChild(div)
    setTimeout(() => {
        loader.setAttribute('style', 'opacity: 0%;')
        let smallText = document.getElementById('container-h2')
        smallText.textContent = "All your problems are now solved"

        let largeText = document.getElementById('container-h1')
        largeText.textContent = "Congrats"
        

    }, 3000)
}

// function otherEvents () {
//     let body = document.querySelector('body')
//     body.setAttribute('style', 'transform: rotateY(180deg);')

//     setTimeout(() => {
//         body.setAttribute('style', 'transform: rotateY(0deg);')
//     }, 1000)
// }

function otherEvents () {
    let lightbulb = document.getElementById('bulb')
    let body = document.querySelector('body')
    body.setAttribute('style', 'transform: rotateY(180deg);')

    setTimeout(() => {
        body.setAttribute('style', 'transform: rotateY(0deg);')
    }, 1000)
}