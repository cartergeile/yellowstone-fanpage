const container = document.getElementById('container')

const characters = []

const john = {
  name: 'John Dutton',
  job: 'Governor',
  age: 65
}
const beth = {
  name: 'Beth Dutton',
  job: 'Business Woman',
  age: 35
}
const rip = {
  name: 'Rip Wheeler',
  job: 'Lead Rancher',
  age: 36
}
const casey = {
  name: 'Casey Dutton',
  job: 'Livestock Commishoner',
  age: 29
}
const jamie = {
  name: 'Jamie Dutton',
  job: 'Attorney General',
  age: 38
}
const jimmy = {
  name: 'Jimmy',
  job: 'Rancher',
  age: 26
}
characters.push(john, beth, rip, casey, jamie, jimmy)

characters.forEach((element, i) => {
  const characterDiv = document.createElement('div')
  characterDiv.setAttribute('class', 'character')
  characterDiv.setAttribute('id', `character${i}`)

  const characterName = document.createElement('h2')
  characterName.innerText = element.name
  characterDiv.appendChild(characterName)

  const characterJob = document.createElement('h3')
  characterJob.setAttribute('id', `job${i}`)
  characterDiv.appendChild(characterJob)

  const characterAge = document.createElement('h4')
  characterAge.setAttribute('id', `age${i}`)
  characterDiv.appendChild(characterAge)

  const jobButton = document.createElement('button')
  jobButton.setAttribute('class', 'character-button')
  jobButton.setAttribute('class', 'job')
  jobButton.setAttribute('id', `job${i}`)
  jobButton.setAttribute('onclick', `jobButton(${i})`)
  jobButton.innerText = 'JOB'
  characterDiv.appendChild(jobButton)

  const ageButton = document.createElement('button')
  ageButton.setAttribute('class', 'character-button')
  ageButton.setAttribute('class', 'age')
  ageButton.setAttribute('id', `age${i}`)
  ageButton.setAttribute('onclick', `ageButton(${i})`)
  ageButton.innerText = 'AGE'
  characterDiv.appendChild(ageButton)

  container.appendChild(characterDiv)
})

// console.log(container)

function jobButton(job) {
  let x = document.getElementById(`job${job}`)
  if (x.innerText === '') {
    x.innerText = characters[job].job
  } else {
    x.innerText = ''
  }
}

function ageButton(age) {
  let x = document.getElementById(`age${age}`)
  if (x.innerText === '') {
    x.innerText = characters[age].age
  } else {
    x.innerText = ''
  }
}