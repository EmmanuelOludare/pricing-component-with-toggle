const toggleButton = document.getElementById("toggler");
const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");

toggleButton.addEventListener("click",() => {
 toggleButton.classList.toggle("annually");
 if (toggleButton.classList=="annually") {
  basic.innerHTML= "&dollar;199.99";
	professional.innerHTML= "&dollar;249.99";
 master.innerHTML= "&dollar;399.99";	
 }else {
 	basic.innerHTML= "&dollar;19.99";
	professional.innerHTML= "&dollar;24.99";
 master.innerHTML= "&dollar;39.99";
 }
});
