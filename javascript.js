const d111 = document.getElementById('d111');
    const d1 = document.getElementById('d1');

    d111.addEventListener('click', () => {
        if (d1.style.display === 'block' || d1.style.display === '') {
            d1.style.display = 'none'; // Show the div
            d2.style.display = 'block'
            d3.style.display = 'none'
        } 
        else {
            d1.style.display = 'none'; // Hide the div
            d2.style.display = 'block'
            d2.style.display = 'block'

        }
    });   
    
    const d222 = document.getElementById('d222');
    const d2 = document.getElementById('d2');

    d222.addEventListener('click', () => {
        if (d2.style.display === 'block' || d2.style.display === '') {
            d2.style.display = 'none'; // Show the div
            d1.style.display = 'block'
            d3.style.display = 'none'
        } 
        else {
            d1.style.display = 'none'; // Hide the div
            d2.style.display = 'block'
            d3.style.display = 'none'

        }
    });   

    const d333 = document.getElementById('d333');

    d333.addEventListener('click', () => {
        if (d1.style.display === 'block' || d1.style.display === '') {
            d1.style.display = 'none'; // Show the div
            d3.style.display = 'block'
            d2.style.display = 'none'
        } 
        else {
            d1.style.display = 'none'; // Hide the div
            
        }
    });
    const dd333 = document.getElementById('dd333');
    const d3 = document.getElementById('d3');

    dd333.addEventListener('click', () => {
        if (d3.style.display === 'block' || d2.style.display === '') {
            d3.style.display = 'none'; // Show the div
            d1.style.display = 'block'
            d2.style.display = 'none'
        } 
        else {
            d1.style.display = 'none'; // Hide the div
            d2.style.display = 'block'
            d3.style.display = 'none'

        }
    });   
