document.getElementById('calculateBtn').addEventListener('click', function() {
    // Fetching input values
    var costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    var litersPurchased = parseFloat(document.getElementById('litersPurchased').value);

    // Calculating total cost
    var totalCost = costPerLiter * litersPurchased;

    // Displaying total cost
    document.getElementById('totalCost').innerText = 'Total Cost: $' + totalCost.toFixed(2);
});
