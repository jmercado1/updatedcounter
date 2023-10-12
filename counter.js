 const countElement = document.getElementById("count");
 const incrementButton = document.getElementById("add");
 const decrementButton = document.getElementById("subtract");

 let totalCount = 0;

 // Function to update count
 function updateCount() {
   countElement.textContent = totalCount;
 }
// Adding method
 incrementButton.addEventListener("click", function () {
   totalCount++;
   updateCount();
 });

 // Subtracting method
 decrementButton.addEventListener("click", function () {
   totalCount--;
   updateCount();
 });

 // Initial update of the count
 updateCount();