const btn = document.getElementById('btn');
const output = document.getElementsByClassName('result');


btn.addEventListener('click', function(e){
    e.preventDefault();

    let heightInput = document.getElementById('heightInput').value;
    let weightInput = document.getElementById('weightInput').value;

    if( weightInput === ''){
        return (output[0].innerHTML = 'Please enter a valid weight');
    }else if(heightInput === ''){
        return (output[0].innerHTML = 'Please enter a valid height');
    }else {
        heightInput = heightInput / 100;
        let BMI = (weightInput / Math.pow(heightInput,2)).toFixed(2);

        if(BMI < 18.5){
            output[0].innerHTML = `Underweight: <span>${BMI}</span>`
        }else if(BMI>=18.5 && BMI<24.5){
            output[0].innerHTML = `Normal: <span>${BMI}</span>`
        }else if(BMI>=25 && BMI<29.9){
            output[0].innerHTML = `OverWeight: <span>${BMI}</span>`
        }else{
            output[0].innerHTML = `Obese: <span>${BMI}</span>`
        }
    }
})
