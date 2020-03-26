# paintjs

Painting Board made with VanillaJS

# reset CSS

https://meyerweb.com/eric/tools/css/reset/

# all: unset;

/_엘리먼트에 적용된 값들을 초기화_/

# transform: scale()

/_버튼 클릭 효과_/
.controls\_\_btns button:active {
/_transform의 scale로 요소를 확대 또는 축소_/
transform: scale(0.98);
}

# getElementsByClassName

document.getElementsByClassName("jsColor");//class collection 모음

# array로 만들기

Array.from(colors)

# canvas

https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath

# input.addEventListener('input', updateValue);

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

# 버튼의 TEXT 변경

let filling = false;
---------------
if (filling === true) {
filling = false;
mode.innerText = "Fill";
} else {
filling = true;
mode.innerText = "Paint";
}

# 마우스 우클릭 금지
addEventListener("contextmenu", handleCM);

function handleCM (e){
    e.preventDefault();
}

# 단축키

| 키                                            | 결과                                                                                        |
| --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| html5                                         | <!DOCTYPE html>~~ </html>                                                                   |
| div.controls_btns>button#jsMode+button#jsSave | <div class="controls_btns"><button id="jsMode"></button><button id="jsSave"></button></div> |

|
