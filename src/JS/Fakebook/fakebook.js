// search



// main profile

// url for fetching

const url = 'https://randomuser.me/api/'
const peopleurl = 'https://randomuser.me/api/?results=100'
const activityurl = 'https://www.boredapi.com/api/activity/'

// parsing results

function parseJSON(res) {
    return res.json();
}

// variable elements

let avatar = document.getElementById('avatar')
let fullname = document.getElementById('fullname')
let age = document.getElementById('age')
let fullcountry = document.getElementById('fullcountry')

// get results for profile info

function updateProfile(profile) {
    avatar.src = profile.results[0].picture.large;
    fullname.innerText = profile.results[0].name.first + " " + profile.results[0].name.last;
    age.innerText = "Age: " + profile.results[0].dob.age;
    fullcountry.innerText = "From: " + profile.results[0].location.city + ", " + profile.results[0].location.country;
}

function generateProfile() {
    fetch(url)
        .then(parseJSON)
        .then(updateProfile)
}

generateProfile()



// feed

let feed = document.getElementById('feed')

function generateActivity() {
    fetch(peopleurl).then(parseJSON)
        .then(data => {
            for (let i = 0; i < 6; i++) {
                feed.innerHTML += `
                <div class="card m-2">
                <img src="${data.results[i].picture.large}" class="card-img-top" alt="...">
                <div class="card-body bg-dark text-light"
                  <h5 class="card-title">${data.results[i].name.first + " " + data.results[i].name.last}</h5>
                </div>
                <div class="card-footer border-bottom">
                <p class="card-text border-bottom">Activity: </p>
                <div>
                  <small class="text-muted border-bottom">Type: </small>
                </div>
                <small class="text-muted border-bottom">Participants: </small>
                </div>
              </div>
    `
            }
        })
}

generateActivity()

