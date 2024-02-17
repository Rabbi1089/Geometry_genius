function calculateParallelgramArea(){
    const base = getValueById('parallelogram-base-input');
    console.log('Base is '+ base);

    const Height = getValueById('parallelogram-height-input');
    console.log('Height is '+ Height);

    const area = base * Height;
    console.log('Total area of Parallelogram : '+ area);

    setInnerTextById('Parallelogram-area', area);

    // const paraArea = document.getElementById('para-area');
    // console.log(paraArea)
    // paraArea.innerText = area;

}

function getValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const retunValue = inputField.value;
    const base = parseFloat(retunValue);
    return base;

}

function setInnerTextById(paraArea,area){
    const ParallelogramArea = document.getElementById(paraArea);
    //console.log('setInnerTextById-'+paraArea , area)
    ParallelogramArea.innerText = area;
}