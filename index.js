let converter = document.getElementById("converter");
let conBtn = document.querySelector(".conv");
let resetBtn = document.querySelector(".reset");
let changeBtn = document.querySelector(".change");
let result = document.querySelector(".result");
let one = document.querySelector(".one");
let two = document.querySelector(".two");

let fahrenheit;
let celsius;

// T(°F) = T(°C)  1.8× + 32
// T(°C) = (T(°F) - 32) / 1.8
let app =()=>{
    if(converter.value===''){  
        result.textContent='Podaj temperature'
    }else{
        convert()
    }
}

let convert = () => {
	if (one.textContent === "°C") {
		let action = Math.round((converter.value * 1.8 + 32))
        result.textContent=action
	} else{
        let action= Math.round(((converter.value -32)/ 1.8))
        result.textContent=action
    } 
};
let swap = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
	}
    result.textContent=''
    converter.value=''
};
let reset=()=>{
    result.textContent=''
    converter.value=''
    one.textContent = "°C";
	two.textContent = "°F";
}
changeBtn.addEventListener("click", swap);
conBtn.addEventListener("click", app);
resetBtn.addEventListener('click', reset)

// let a=1
// document.write(a)
// document.write(a+=1)
// document.write(a=+1)
