const buyMe = document.querySelectorAll('img.buy');

function addToCart(){
  const buyMe = document.getElementsByClassName('.cartCount');
  let numItems = buyMe.innerHTML;
  numItems.value+=1;
}

buyItems.forEach(buyMe => {
  for(let i = 0;i< buyMe.length; i++){
    buyMe[i].addEventListener('click', addToCart);
  }
});