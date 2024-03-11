import faker from 'faker';

const cartText = `<div>you have items ${faker.random.number()} in your cart</div>`

document.querySelector('#dev-cart').innerHTML = cartText;