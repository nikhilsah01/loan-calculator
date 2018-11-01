document.getElementById("loan-form").addEventListener("submit", function(e){
    
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "block"; 

    setTimeout(Result,500)

    e.preventDefault();
});



function Result(){
    
    const amount = document.getElementById("amount");
    const interst = document.getElementById("interest");
    const years = document.getElementById("years");
    const Monthlypayment = document.getElementById("monthly-payment");
    const totalpayment = document.getElementById("total-payment");
    const totalinterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterst = parseFloat(interst.value)/100/12;
    const calculatedyears = parseFloat(years.value)*12;


   const x = Math.pow(1+ calculatedInterst , calculatedyears );
   const monthly = (principal*x*calculatedInterst)/x-1;

    if(isFinite(monthly)) {
        Monthlypayment.value = monthly.toFixed(2);
        totalpayment.value = (monthly *calculatedyears ).toFixed(2);
        totalinterest.value = ((monthly*calculatedyears)-principal).toFixed(2);
        document.getElementById("results").style.display = "block";
        document.getElementById("loading").style.display = "none"; 
    }
     else {
         showError("please check your nmuber")
     }

  
}

function showError(error) {
   const errorDiv = document.createElement("div");
   errorDiv.className ="alert alert-danger" ;

   const card = document.querySelector(".card");
   const heading = document.querySelector(".heading");

   errorDiv.appendChild(document.createTextNode(error))

   card.insertBefore(errorDiv,heading);


}