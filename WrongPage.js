var UI = document.createElement("div");
UI.innerHTML = '
<div id="NonSupportedSite" style="width:400px; left: 100px; top: 50px; background-color: #282828; outline: solid black 5px; position:absolute; z-index: 99999;">
	<h1 class="rainbow_text" ; style="text-align: center; font-size: 34px;">
		<strong> Multi-Tool
	</h1>
	<hr style="height:2px;border-width:0; background-color: gray">
	<h2 class="rainbow_text" ; style="text-align: center; font-size: 20px;">
       Supported Sites:
      </h2>
	<h1 style="text-align: center; word-spacing: 4px; font-size: 20px; color: turquoise">
        Blooket [Patched]
      </h1>
	<h1 style="text-align: center; font-size: 20px; color: darkorange">
        iReady
      </h1>
	<h1 style="text-align: center; font-size: 20px; color: green">
        Khan Academy
      </h1>
      <h1 style="text-align: center; font-size: 20px; color: purple">
        Quizizz [Soon]
      </h1>
      <h1 style="text-align: center; font-size: 20px; color: blue">
        Quizlet [Soon]
      </h1>
	<hr style="height:2px;border-width:0; background-color: gray">
	<footer style="text-align: center; font-size: 11px; color: red"> If your seeing this, that means your not on a supported site idiot! </footer>’
	<style>
	#Multi-Tool {
		background-color: rgb(0, 0, 2);
		/ * Fallback color * / background-color: rgba(0, 0, 0, 0.2);
		/ * Black w / opacity / see - through * / border: 3px solid;
	}
	
	.rainbow {
		text-align: center;
		text-decoration: underline;
		font-size: 35px;
		font-family: monospace;
		letter-spacing: 5px;
	}
	
	.rainbow_text {
		background: linear-gradient(to right, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		animation: rainbow_animation 3s ease-in-out infinite;
		background-size: 400% 100%;
	}
	
	@keyframes rainbow_animation {
		0%,
		100% {
			background-position: 0 0;
		}
		50% {
			background-position: 100% 0;
		}
	}
	
	</div>';

function dragElement(e) {
        var t = 0,
                o = 0,
                n = 0,
                s = 0;

        function i(e) {
                (e = e || window.event).preventDefault(), n = e.clientX, s = e.clientY, document.onmouseup = a, document.onmousemove = r
        }

        function r(i) {
                (i = i || window.event).preventDefault(), t = n - i.clientX, o = s - i.clientY, n = i.clientX, s = i.clientY, e.style.top = e.offsetTop - o + "px", e.style.left = e.offsetLeft - t + "px"
        }

        function a() {
                document.onmouseup = null, document.onmousemove = null
        }
        document.getElementById(e.id + "header") ? document.getElementById(e.id + "header").onmousedown = i : e.onmousedown = i
}

dragElement(UI.firstElementChild);
document.body.appendChild(UI);
