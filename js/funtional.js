/Start/
function getInputValue(inputId){
             const InputField = document.getElementById(inputId);
            const InputAmountText = InputField.value;
            const AmountValue= parseFloat(InputAmountText);
            // clear deposit input
            InputField.value='';
            return AmountValue;

}  /End/

function updateTotalField(totalFieldID,amount){                      /start/
              const TotalElement = document.getElementById(totalFieldID);
              const TotalAmountText = TotalElement.innerText;
              const TotalAmount = parseFloat(TotalAmountText);

TotalElement.innerText=amount + TotalAmount;
}            /End/
 
 function getCurrentBlance(){                                                        /start/
    const blanceTotal =document.getElementById('blanceAmount');
    const previousBlanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal=parseFloat(previousBlanceTotalText);
    return previousBlanceTotal;
 }   /End/

 function updateBlance(depositAmount,isAdd){                                        /start/
     const blanceTotal =document.getElementById('blanceAmount');
     const previousBlanceTotal= getCurrentBlance();
if (isAdd == true){
    blanceTotal.innerText= previousBlanceTotal+ depositAmount;
}
else{
    blanceTotal.innerText= previousBlanceTotal- depositAmount;
}
}      /End/





// *******************event handleler deposit btn*********************

document.getElementById('depositBtn').addEventListener('click',function(){

      const depositAmount = getInputValue('depositInput');    /function call /

if(depositAmount >0){
    updateTotalField('depositamount',depositAmount);
    updateBlance(depositAmount,true);
}

});

// *******************event handeler withdraw button ************************


document.getElementById('withdrawBtn').addEventListener('click',function(){

      const withdrawInputAmount = getInputValue('withdraw-total');    /function call/
      const curretblance= getCurrentBlance();

if (withdrawInputAmount > 0 && withdrawInputAmount < curretblance){
    updateTotalField('withdraw-blance',withdrawInputAmount);
    updateBlance(withdrawInputAmount,false);
}
if(withdrawInputAmount > curretblance){
    window.alert("Insuffeiant Blance");
}

});