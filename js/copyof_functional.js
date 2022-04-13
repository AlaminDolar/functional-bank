
function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
   const InputAmountText = InputField.value;
   const AmountValue= parseFloat(InputAmountText);
   // clear deposit input
   InputField.value='';
   return AmountValue;

}

function updateTotalField(totalFieldID,amount){
     const TotalElement = document.getElementById(totalFieldID);
     const TotalAmountText = TotalElement.innerText;
     const TotalAmount = parseFloat(TotalAmountText);

TotalElement.innerText=amount + TotalAmount;
}




// *******************event handleler deposit btn*********************

document.getElementById('depositBtn').addEventListener('click',function(){
// console.log('deposit button clicked');
// get deposit input
// const depositInput = document.getElementById('depositInput');
// const despositAmountText = depositInput.value;
// const despositAmount= parseFloat(despositAmountText);
// console.log(despositAmount);

const depositAmount = getInputValue('depositInput');    /function call /

// get an update deposit total
// const depositTotal = document.getElementById('depositamount');
// const depositTotalAmountText = depositTotal.innerText;
// const previousTotalAmount = parseFloat(depositTotalAmountText);

// depositTotal.innerText=despositAmount + previousTotalAmount;
updateTotalField('depositamount',depositAmount);



// Update blance
const blanceTotal =document.getElementById('blanceAmount');
const previousBlanceTotalText = blanceTotal.innerText;
const previousBlanceTotal=parseFloat(previousBlanceTotalText);
blanceTotal.innerText= previousBlanceTotal+ depositAmount;


// // clear deposit input
// depositInput.value='';



});

// *******************event handeler withdraw button ************************


document.getElementById('withdrawBtn').addEventListener('click',function(){
// console.log('button clicked');

// get withdraw input
// const withdrawInput = document.getElementById('withdraw-total');
// const withdrawInputText= withdrawInput.value;
// const withdrawInputAmount = parseFloat(withdrawInputText);
const withdrawInputAmount = getInputValue('withdraw-total');    /function call/
// console.log (withdrawInputText);

// get an update withdraw total
// const withdrawTotal = document.getElementById('withdraw-blance');
// const previoustWithdarwTotalText = withdrawTotal.innerText;
// const previoustWithdarwTotal= parseFloat(previoustWithdarwTotalText);
// withdrawTotal.innerText= previoustWithdarwTotal+ withdrawInputAmount;

updateTotalField('withdraw-blance',withdrawInputAmount);



// Update blance
const blanceTotal =document.getElementById('blanceAmount');
const previousBlanceTotalText = blanceTotal.innerText;
const previousBlanceTotal=parseFloat(previousBlanceTotalText);
blanceTotal.innerText= previousBlanceTotal-withdrawInputAmount;

// // clear input value
// withdrawInput.value="";

})