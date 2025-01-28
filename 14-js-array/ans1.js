const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let meatHai = false;
if(shoppingCart.includes('Meat')){
    meatHai = true;
} else {
    shoppingCart.splice(0,0,'Meat'); // unshift() method also can be used
    // shoppingCart.unshift('Meat');
}
console.log(shoppingCart); 

let sugarHai=false;
let cartLastItemIndex = shoppingCart.length-1;
if(shoppingCart.includes('Sugar')){
    sugarHai=true;
}else {
    shoppingCart.splice(cartLastItemIndex, 0, 'Sugar')
}
console.log(shoppingCart); 

let allergic = true;
if(shoppingCart.includes('Honey')){
   let honeyIndex = shoppingCart.indexOf('Honey');
   shoppingCart.splice(5,1);
}
console.log(shoppingCart);

if(shoppingCart.includes('Tea')){
    let teaIndex = shoppingCart.indexOf('Tea');
    shoppingCart.splice(teaIndex, 1, 'Green Tea');
}
console.log(shoppingCart);