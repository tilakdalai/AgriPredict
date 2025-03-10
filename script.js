
function showResults() {
    const commodity = document.getElementById('commodity').value;
    const location = document.getElementById('location').value;
    const period = document.getElementById('prediction-period').value;

    if (!commodity || !location) {
        alert('Please select both commodity and location');
        return;
    }

    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'block';

    document.getElementById('commodity-name').textContent =
        document.getElementById('commodity').options[document.getElementById('commodity').selectedIndex].text;
    document.getElementById('location-name').textContent =
        document.getElementById('location').options[document.getElementById('location').selectedIndex].text;
    document.getElementById('timeframe').textContent =
        document.getElementById('prediction-period').options[document.getElementById('prediction-period').selectedIndex].text;


    let trendPercentage = (Math.random() * 10).toFixed(2);
    let trendDirection = Math.random() > 0.5 ? "increase" : "decrease";
    let trend = `${trendDirection} by ${trendPercentage}%`;


    let basePrice = (Math.random() * 100).toFixed(2);
    let peakPrice = (parseFloat(basePrice) + Math.random() * 5).toFixed(2);
    let lowestPrice = (parseFloat(basePrice) - Math.random() * 5).toFixed(2);
    let confidence = (Math.random() * 20 + 70).toFixed(2); // Random confidence between 70-90%


    document.getElementById('trend').textContent = trend;
    document.getElementById('current-price').textContent = basePrice;
    document.getElementById('peak-price').textContent = peakPrice;
    document.getElementById('lowest-price').textContent = lowestPrice;
    document.getElementById('confidence').textContent = confidence;

    resultSection.scrollIntoView({ behavior: 'smooth' });
}

