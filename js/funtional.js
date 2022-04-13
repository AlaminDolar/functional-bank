// *******************event handleler deposit btn*********************

document.getElementById('depositBtn').addEventListener('click',function(){
// console.log('deposit button clicked');
// get deposit input
const depositInput = document.getElementById('depositInput');
const despositAmountText = depositInput.value;
const despositAmount= parseFloat(despositAmountText);
// console.log(despositAmount);

// get current deposit
const depositTotal = document.getElementById('depositamount');
const depositTotalAmountText = depositTotal.innerText;
const previousTotalAmount = parseFloat(depositTotalAmountText);
depositTotal.innerText=despositAmount + previousTotalAmount;

// Update blance
const blanceTotal =document.getElementById('blanceAmount');
const previousBlanceTotalText = blanceTotal.innerText;
const previousBlanceTotal=parseFloat(previousBlanceTotalText);
blanceTotal.innerText= previousBlanceTotal+ despositAmount;


// clear deposit input
depositInput.value='';



});

// *******************event handeler withdraw button ************************


document.getElementById('withdrawBtn').addEventListener('click',function(){
 // console.log('button clicked');

// get withdraw input
const withdrawInput = document.getElementById('withdraw-total');
const withdrawInputText= withdrawInput.value;
const withdrawInputAmount = parseFloat(withdrawInputText);
// console.log (withdrawInputText);

// get current withdraw
const withdrawTotal = document.getElementById('withdraw-blance');
const previoustWithdarwTotalText = withdrawTotal.innerText;
const previoustWithdarwTotal= parseFloat(previoustWithdarwTotalText);
withdrawTotal.innerText= previoustWithdarwTotal+ withdrawInputAmount;



// Update blance
const blanceTotal =document.getElementById('blanceAmount');
const previousBlanceTotalText = blanceTotal.innerText;
const previousBlanceTotal=parseFloat(previousBlanceTotalText);
blanceTotal.innerText= previousBlanceTotal-withdrawInputAmount;

// clear input value
withdrawInput.value="";

})