import sweetsLogo from './assets/SWEETS Logo.svg'

export function createHeader(){
  const headerContainer = document.createElement('div')
  const navBar = document.createElement('ul')
  const orderButton = document.createElement('button')
  const logoContainer = document.createElement('img')

  headerContainer.classList.add('headerContainer')
  navBar.classList.add('navBar')
  logoContainer.src = sweetsLogo
  orderButton.innerText = 'ORDER CAKE'
  for(let i=0;i<3;i++){
    const navBarElement = document.createElement('li')
    const navBarLink = document.createElement('a')
    switch(i){
      case 0:
        navBarLink.innerText = 'HOME'
        break
      case 1:
        navBarLink.innerText = 'MENU'
        break
      case 2:
        navBarLink.innerText = 'CONTACTS'
    }
    navBarElement.append(navBarLink)
    navBar.append(navBarElement)
  }

  headerContainer.append(logoContainer,navBar,orderButton)
  document.body.prepend(headerContainer)
}