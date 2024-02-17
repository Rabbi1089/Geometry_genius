function triangleClick (){
    const triAngleInput = document.getElementById('triangle-base-input');
    const tryInputText = triAngleInput.value;
    const base = parseFloat(tryInputText)
    //console.log(base);

    const triAngleInput1 = document.getElementById('triangle-height-input');
    const tryInputText1 = triAngleInput1.value;
    const height = parseFloat(tryInputText1)

    const area = 0.5 * base * height;
    console.log('Area is : '+ area);

    const areaDisplay = document.getElementById('triangleAreaSpan');
    areaDisplay.innerText = area;
}
