
function calculateRectangle(){
    const rectangleInput = document.getElementById('rectangle-base-input');
    const rectangleTxt = rectangleInput.value;
    const base = parseFloat(rectangleTxt);
    console.log(base)

    const rectangleHeight = document.getElementById('rectangle-height-input');
    const heightTxt = rectangleHeight.value;
    const height = parseFloat(heightTxt);

    const recArea = base * height;
    console.log(recArea)
    const rectangleAreaDisplay = document.getElementById('tri-area');
    rectangleAreaDisplay.innerText = recArea;
}