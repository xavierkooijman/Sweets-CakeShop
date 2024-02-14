import Sprinkles from './assets/Sprinkles circle.svg'

export function createHome(){
  const homeContainer = document.createElement('div')
  const heroContainer = document.createElement('div')
  const titleText = document.createElement('p')
  const subTitleText = document.createElement('p')
  const buttonsContainer = document.createElement('div')
  const sprinklesContainer = document.createElement('img')
  const orderCustomButton = document.createElement('button')
  const viewMenuButton = document.createElement('button')

  titleText.innerText = 'Order your freshly baked custom cake now'
  subTitleText.innerText = 'Create your very own unique and customized cake with SWEETS. Choose a design, size and flavor and add as many personalized details as you wish.'
  orderCustomButton.innerText = 'ORDER CUSTOM'
  viewMenuButton.innerText = 'VIEW MENU'
  sprinklesContainer.src = Sprinkles

  titleText.classList.add('homeTitleText')
  subTitleText.classList.add('homeSubTitleText')
  orderCustomButton.classList.add('orderCustomButton')
  viewMenuButton.classList.add('viewMenuButton')
  buttonsContainer.classList.add('homeButtonsContainer')
  heroContainer.classList.add('heroContainer')
  homeContainer.classList.add('homeContainer')
  sprinklesContainer.classList.add('sprinklesContainer')

  buttonsContainer.append(orderCustomButton,viewMenuButton)
  heroContainer.append(titleText,subTitleText,buttonsContainer)
  homeContainer.append(sprinklesContainer,heroContainer)
  document.body.append(homeContainer)
}
