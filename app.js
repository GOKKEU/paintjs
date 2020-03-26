const canvas = document.getElementById("jsCanvas");
/*캔버스는 2가지를 갖는다*/
/*우리가 보는 CSS 사이즈와 해당 이벤트가 작동하는 범위 사이즈를 지정해야 한다(실제 픽셀 사이즈)*/

const CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
let painting = false;
let filling = false;
const colors = document.getElementsByClassName("jsColor"); //class 모음
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

const saveBtn = document.getElementById("jsSave");

/*실제 그리기는 CanvasRenderingContext2D 인터페이스를 사용해 수행
라인의 기본값은 검정으로 설정한다.
라인의 두께는 2.5 로 설정한다.
*/
/* getContext() 메서드를 이용해서, 랜더링 컨텍스트와 (렌더링 컨텍스트의) 그리기 함수들을 사용*/
const ctx = canvas.getContext("2d");
const INITIAL_COLOR = "#2c2c2c";

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
/*filling 기본 배경색상을 white로 지정*/
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

function startPainting() {
    painting = true;
}
function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    /*offsetX offsetY 캔버스 내에서의 좌표*/
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        //마우스고 움직이는 동안 계속 path 발생
        ctx.beginPath(); // they may be drawn with different colors.
        ctx.moveTo(x, y);
    } else {
        /*마우스로 캠퍼스 위를 클릭하고 이동하면 아래 코드는 실행*/
        //moveTo(x,y)로 클릭 되기 전 위치가 정해지고
        //lineTo(x,y)로 정해진 위치부터 lineTo에 입력한 지점까지 클릭한 상태에서 그림이 그려지도록
        ctx.lineTo(x, y);
        ctx.stroke(); //선을 실제로 만듬
    }
}

function onmouseLeave(event) {
    stopPainting();
}
function handleModeClick() {
    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}
function handleRangeChange(event) {
    const strokeSize = event.target.value;
    ctx.lineWidth = strokeSize;
}
function changeColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
function handleCanvasClick(event) {
    if (filling === true) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}
function handleCM(event) {
    event.preventDefault(); //동작을 중단시킨다.
}

function handleSaveClick() {
    const image = canvas.toDataURL();
    /*a 의 속성중 download*/
    const link = document.createElement("a");
    link.href =image;
    link.download = "PaintJS[EXPORT]";
    link.click();
}
/*캔버스 요소가 정의되어 있다면*/
if (canvas) {
    /*1.캔버스가 커서를 인식*/
    canvas.addEventListener("mousemove", onMouseMove);
    /*2.캔버스에 마우스가 클릭했을때를 인식*/
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    /*3.캔버스 요소를 떠났을때*/
    canvas.addEventListener("mouseleave", onmouseLeave);
    /* 4.캔버스 클릭시 fill모드 */
    canvas.addEventListener("click", handleCanvasClick);
    /*5.캔버스 마우스 오른쪽 버튼시 메뉴*/
    canvas.addEventListener("contextmenu", handleCM);
}
//colors모음에 color를 클릭할때 changeColor 발생
Array.from(colors).forEach(color => color.addEventListener("click", changeColor));

if (range) {
    range.addEventListener("input", handleRangeChange);
}
if (mode) {
    mode.addEventListener("click", handleModeClick);
}
if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}
