// WRITE YOUR CODE BELOW!

const section = document.querySelector('.main__dog-section')
const main = document.querySelector('.main')
const header = document.querySelector('.dogs-list')

function dogs (dog) {
  const header = document.querySelector('.dogs-list')
  const topLi = document.createElement('li');
  topLi.classList.add('dogs-list__button')
  topLi.innerText = dog.name
  header.append(topLi)

  topLi.addEventListener('click', () => {
    while (section.hasChildNodes()) {
      section.removeChild(section.firstChild)
    }
    createDog(dog)
  })
}

function createDog (dog) {

  const h2 = document.createElement('h2')
  h2.innerText = dog.name

  const img = document.createElement('img')
  img.setAttribute('src', dog.image)
  img.setAttribute('alt', '')

  const div = document.createElement('div')
  div.classList.add('main__dog-section__desc')

  const h3 = document.createElement('h3')
  h3.innerText = 'Bio'

  const p = document.createElement('p')
  p.innerText = dog.bio

  const p2 = document.createElement('p')
  p2.innerHTML = '<em>Is naughty?</em> yes!'

  const button = document.createElement('button')
  button.innerText = 'Good dog!'

  section.append(h2)
  section.append(img)
  section.append(div)
  div.append(h3)
  div.append(p)
  section.append(p2)
  section.append(button)

  button.addEventListener('click', (e) => {
    if (e.target.innerText === 'Good dog!') {
      button.innerText = 'bad dog!'
      p2.innerHTML = '<em>Is naughty?</em> No!'
    }
    else {
      button.innerText = 'Good dog!'
      p2.innerHTML = '<em>Is naughty?</em> yes!'
    }
  })
}

for (let dog of data) {
  dogs(dog)
}

function addDog () {
  const h2 = document.createElement('h2')
  h2.innerText = 'Add a new dog'
  section.append(h2)

  const form = document.createElement('form')
  form.classList.add('form')
  section.append(form)

  const labelName = document.createElement('label')
  labelName.setAttribute('for', 'name')
  labelName.innerText = `Dog's name`
  const inputName = document.createElement('input')
  inputName.setAttribute('type', 'text')
  inputName.setAttribute('id', 'name')
  inputName.setAttribute('name', 'name')

  const labelImg = document.createElement('label')
  labelImg.setAttribute('for', 'image')
  labelImg.innerText = `Dog's picture`
  const inputImg = document.createElement('input')
  inputImg.setAttribute('type', 'url')
  inputImg.setAttribute('id', 'image')
  inputImg.setAttribute('name', 'image')

  const labelBio = document.createElement('label')
  labelBio.setAttribute('for', 'bio')
  labelBio.innerText = `Dog's bio`
  const text = document.createElement('textArea')
  text.setAttribute('rows', '5')
  text.setAttribute('id', 'bio')
  text.setAttribute('name', 'bio')

  const inputButton = document.createElement('input')
  inputButton.setAttribute('type', 'submit')
  inputButton.setAttribute('id', 'submit')
  inputButton.setAttribute('name', 'submit')
  inputButton.setAttribute('value', `Let's add a dog!`)
  inputButton.classList.add('form__button')

  form.append(labelName, inputName, labelImg, inputImg, labelBio, text, inputButton)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let c = 7
    c++
    const dog = {
      id: c,
      name: e.target.name.value,
      bio: e.target.bio.value,
      image: e.target[1].value
    }
    dogs(dog)
  })
}

const add = document.querySelector('.dogs-list__button--add')
add.addEventListener('click', (e) => {
  while (section.hasChildNodes()) {
    section.removeChild(section.firstChild)
  }
  addDog()
})


