

function calculatePentagonArea(){
   const base = getValueFromId('pantagon-base-input');
   console.log(base);

   const height = getValueFromId('pantagon-height-input')
   console.log(height);
   const pentaArea = base * height;
   setInnerTextById('pentragragram-area', pentaArea);
}

function getValueFromId(pentamInput){
    const pentam = document.getElementById(pentamInput);
    const value = pentam.value;
    const retunValue = parseFloat(value);
    return retunValue;
    
}

function setInnerTextById(peraAreaId, pntaArea){
    const peraSpan = document.getElementById(peraAreaId);
    console.log(peraSpan);
    peraSpan.innerText = pntaArea;
}

