
// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  //  console.log("Event listerner cheak")
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /* 
    1. get previous deposit total by id

    */
  if(newDepositAmount > 0){
    const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  // console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  function setDepostiText(){
    setTextElementValueById("deposit-total", newDepositTotal);
  };
  setDepostiText();
  

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  console.log("previousBalanceTotal")
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  function setMainBalance(){
    setTextElementValueById("balance-total", newBalanceTotal);
  };
  setMainBalance;
  }else{
    alert("Please Enter Valid Number")
  }
  
});

document.getElementById('deposit-field').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    setDepostiText();
    setMainBalance();
  }
})
