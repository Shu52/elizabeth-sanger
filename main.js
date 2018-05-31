// Book 2, Chapter 9 Practice

const elizabethSanger = {
  congressionalDistrict: 32,
  platformStatements: {
    taxes: "Statement on Taxes",
    jobs: "Statement on Jobs",
    infrastructure: "Statement on Infrastructure",
    healthCare: "Statement on Health care",
    crimeEnforcement: "Statement on Crime and enforcement"
  },
  donationURL: "www.elizabethsanger.com/donations",
  events: [
    "Speak at the people", "Speak to the party"
  ],
  volunteers: [
    {
      name: "Jisie",
      address: "100 Main St",
      email: "jisie.david@nashvillesoftwareschool.com",
      phone: "123-456-7890",
      availability: "9 to 4",
      activities: ["answering phone calls", "taking polls"]
    },
    {
      name: "Emily",
      address: "100 Main St",
      email: "emily@nss.com",
      phone: "123-456-7890",
      availability: "9 to 4",
      activities: ["answering phone calls", "taking polls"]
    },
    {
      name: "Jordan",
      address: "100 Main St",
      email: "jordan@nss.com",
      phone: "123-456-7890",
      availability: "9 to 4",
      activities: ["answering phone calls", "taking polls"]
    }
  ],
  biography: "Long ass bio that I don't want to type out",
  imageGallery: {
    headshot: "http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/marge-simpson-the-simpsons-movie-66.3.jpg",
    family: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Simpsons_FamilyPicture.png/220px-Simpsons_FamilyPicture.png",
    constituents: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Simpsons_cast.png/440px-Simpsons_cast.png"
  },
  missionStatement: "To make the world a better place",
  voterRegistrationURL: "www.registertovote.us"
}

// Function that changes a property on the object elizabethSanger, takes the property and new value to be set as arguments
const changePolitician = (propertyToChange, newValue) => {
  elizabethSanger[propertyToChange] = newValue
}

changePolitician("congressionalDistrict", 101)
console.log(elizabethSanger);

// This function is specifically written to handle an object with another object as one of its properties. In this case, we pass in the object, the property of that object whose value is also a object, the property of the nested object that we want to change and the new value as arguments
const changeImageGallery = (politicianObject, propertyToChange, nestedPropertyToChange, newValue) => {
  politicianObject[propertyToChange][nestedPropertyToChange] = newValue
}

changeImageGallery(elizabethSanger, "imageGallery","headshot", "newImage")
console.log(elizabethSanger.imageGallery);

// This function checks the name property on each of the volunteer objects in the array of volunteers. If the name is equal to the volunteer name passed in as an argument, we add the new value, that is also passed as an argument, to the activities array
const logActivities = (politicianObject, propertyToChange, volunteerProperty, volunteerName, newValue) => {
  const volunteers = elizabethSanger[propertyToChange]

  for(let i = 0; i < volunteers.length; i++){
    if (volunteers[i].name === volunteerName) {
      volunteers[i].activities.push(newValue)
    }
  }
}

logActivities(elizabethSanger, "volunteers", "activities", "Emily", "riding bikes")

console.log(elizabethSanger.volunteers);

// Creating an article HTML element with the id attribute set to the congressional district of Elizabeth Sanger and appending it to the element on the DOM with id content-container
let lizArticle = document.createElement("article")
lizArticle.setAttribute("id", elizabethSanger.congressionalDistrict)

const divRef = document.querySelector("#content-container")
divRef.appendChild(lizArticle)


// Using a for in loop, we iterate over the key value pairs of the platformStatements object in the elizabethSanger object to build an unordered list with each list item containing text with the platform and Elizabeth Sanger's statement on that platform. This unordered list is then appended to the article
let psUlRef = document.createElement("ul")

const platformStatements = elizabethSanger.platformStatements
for(let ps in platformStatements){
  let liRef = document.createElement("li")
  liRef.textContent = `${ps}: ${platformStatements[ps]}`
  psUlRef.appendChild(liRef)
}

lizArticle.appendChild(psUlRef)

// Using a for in loop to iterate over the imageGallery object to build a section with the images and appending the section to the article
let imgSection = document.createElement("section")

const imageGallery = elizabethSanger.imageGallery
for(let image in imageGallery){
  let imgRef = document.createElement("img")
  imgRef.setAttribute("src", imageGallery[image])
  imgSection.appendChild(imgRef)
}

lizArticle.appendChild(imgSection)

// A for in loop iterates over the key value pairs of an object
for(let ps in platformStatements){
  console.log("object property: ", ps);
  console.log("property value", platformStatements[ps]);
}
