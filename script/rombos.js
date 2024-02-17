

function rombosArea(){
    const base = getValueFromId('rhombus-base-input');
    console.log(base);
 
    const height = getValueFromId('rhombus-height-input')
    console.log(height);
    const rhombusAreas = base * height;
    setInnerTextById('rhombus-area', rhombusAreas);
 }
 
 function getValueFromId(rombosInput){
     const rombos = document.getElementById(rombosInput);
     const value = rombos.value;
     const retunValue = parseFloat(value);
     return retunValue;
     
 }
 
 function setInnerTextById(rombosId, rhombusArea){
     const peraSpan = document.getElementById(rombosId);
     console.log(peraSpan);
     peraSpan.innerText = rhombusArea;
 }