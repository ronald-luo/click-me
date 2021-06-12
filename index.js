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
        // console.log(data.clicks)
        if (data.clicks === 1) {
            firstAttempt()
        } else if (data.clicks > 2) {
            otherEvents()
        }
    })
})()

let data = {
    clicks: 0,
    replies: ["ONCE. IT SAID ONCE", "???????", "STILL HERE?", "MOVE ALONG", "BYE.", "forgot how to read?", "incredible.", "leave my child alone!", "please stop it hurts"]
}

let events = {
    '0' : function () {
        let lightbulb = document.getElementById('bulb')
        lightbulb.src = "media/broken.png"
    },
    '1' : function () {
        let smiley = document.getElementById('smile')
        smiley.src = "media/sad.png"
    },
    '2' : function () {
        let beat = document.getElementById('beat-yourself')
        beat.textContent = "Start Beating Yourself Up"
    },
    '3' : function () {
        let good = document.getElementById('good')
        good.textContent = "Good."
    }
}

let textEvents = {
    '0' : function () {
        let h2 = document.getElementById('container-h2')
        h2.textContent = data.replies[Math.floor(Math.random() * data.replies.length)]
    },
    '1' : function () {
        let h1 = document.getElementById('container-h1')
        h1.textContent = data.replies[Math.floor(Math.random() * data.replies.length)]
    }
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
        

    }, 10000)
}

function otherEvents () {
    let eventsLength = Object.keys(events).length
    let randIndex1 = Math.floor( Math.random() * eventsLength )
    events[randIndex1]()

    let textEventsLength = Object.keys(textEvents).length
    let randIndex2  = Math.floor( Math.random() * textEventsLength  )
    textEvents[randIndex2]()
}

// function otherEvents () {
//     let body = document.querySelector('body')
//     body.setAttribute('style', 'transform: rotateY(180deg);')

//     setTimeout(() => {
//         body.setAttribute('style', 'transform: rotateY(0deg);')
//     }, 1000)
// }