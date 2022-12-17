const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

// // const like=document.querySelectorAll('.love')
// const love=document.querySelectorAll('.like')

// like.addEventListener('click' ,() => {
//   like.classList.remove('fill-white')
//   like.classList.add('fill-red')
// })



function copyText1() {
  var copy1 =document.getElementById('copy1')
  navigator.clipboard.writeText(copy1.value);
  console.log(copy1.value)
  alert("Link copied")
}

function copyText2() {
  var copy1 =document.getElementById('copy2')
  navigator.clipboard.writeText(copy2.value);
  console.log(copy2.value)
  alert("Link copied")
}

function copyText3() {
  var copy1 =document.getElementById('copy3')
  navigator.clipboard.writeText(copy3.value);
  console.log(copy3.value)
  alert("Link copied")
}

function copyText4() {
  var copy1 =document.getElementById('copy4')
  navigator.clipboard.writeText(copy4.value);
  console.log(copy4.value)
  alert("Link copied")
}