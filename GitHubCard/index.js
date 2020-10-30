// const { default: Axios } = require("axios");

import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
  .get('https://api.github.com/users/ErikTrethewey-J')
  .then(res => {
    console.log(res.data)
    const data = res.data
    entryPoint.appendChild(cardName(data)) 
  })
  .catch(err => {
    console.log(err)
  })

//   const erikGit = 'https://api.github.com/users/ErikTrethewey-J'

//   axios.get(`${erikGit}/followers`)
//   .then(res=>{
//     const followerObjects = res.data
//     followerObjects.forEach(object =>{
//         const followerCard = object.url
//         axios.get(`${followerCard}`)
//         .then(res =>{
//         const followerData = res.data
//         const followerCard = cardName(followerData)
//         entryPoint.appendChild(followerCard)
//     })
//     .catch(err => console.log(err))
//   })
// })
// .catch(err => console.log(err));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
*/

const entryPoint = document.querySelector('.cards')

function cardName(obj){
  let div1 = document.createElement('div')
  div1.classList.add('cards')

  let img1 = document.createElement('img')
  img1.src= obj.avatar_url;
  div1.appendChild(img1)

  let div2 = document.createElement('div')
  div2.classList.add('card-info')
  div1.appendChild(div2)

  let ha = document.createElement('h3')
  ha.classList.add('name')
  ha.textContent = obj.name
  div2.appendChild(ha)

  let content = document.createElement('p')
  content.classList.add('username')
  content.textContent =`Username: ${obj.login}`
  div2.appendChild(content)

  let content2 = document.createElement('p')
  // location
  content.textContent =`Location: ${obj.location}`;
  div2.appendChild(content2);

  let content3 = document.createElement('p')
  // profile
  content4.textContent = `Profile: `
  div2.appendChild(content3)

  let a = document.createElement('a')
  content3.appendChild(a)
  a.textContent = obj.html_url
  a.href.textContent = obj.html_url

  let content4 = document.createElement('p')
  content4.textContent = `Followers: ${obj.followers}`
  // followers
  div2.appendChild(content4)

  let content5 = document.createElement('p')
  content5.textContent = `Following: ${obj.following}`
  // following
  div2.appendChild(content5)

  let content6 = document.createElement('p')
  content6.textContent = `Bio: ${obj.bio}`
  // bio
  div2.appendChild(content6)
  
  return cardName;
}
/*
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
