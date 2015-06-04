var rand = Math.random() * (1 - 6) + 1;
function rnd(min, max) {
            return Math.random() * (max - min) + min;
        }
window.requestAnimationFrame = start;
function start() {
/*Задаем начальные позиции тараканов*/
	var t1 = 0;
	var t2 = 0;
	var t3 = 0;
	var gonka = document.getElementById("gonka"),
		ctx = gonka.getContext('2d');
	pic = new Image();
	pic.src = 't.jpg';
	var winner = new Array();
		/* Отрисовка тараканов */
		function drow() {
			ctx.beginPath();
				ctx.fillStyle = "#FBFE00";
				ctx.fillRect(0,0,800,150)
				ctx.beginPath();
				ctx.fillStyle = "#CE0071";
				ctx.fillRect(0,150,800,150)
				ctx.beginPath();
				ctx.fillStyle = "#3B14AF";
				ctx.fillRect(0,300,800,150)

				ctx.beginPath();
				ctx.drawImage(pic, t1, 0, 150, 150);
				ctx.drawImage(pic, t2, 150, 150, 150);
				ctx.drawImage(pic, t3, 300, 150, 150);
				ctx.closePath();
				ctx.fill();
				
				if (t1 > 650) {
					winner.push('Победил первый таракан');
					t1 = 650;
				}

				if (t2 > 650) {
					winner.push('Победил второй таракан');
					t2 = 650;
				}

				if (t3 > 650) {
					winner.push('Победил третий таракан');
					t3 = 650;
				}
				
				if (t1 <650) t1 += rnd(-1,6);
				console.log(t1);
				if (t2 <650) t2 += rnd(-1,6);
				if (t3 <650) t3 += rnd(-1,6);

				if (t1 == 650 && t2 == 650 && t3 == 650) {
					t1 = 0;
					t2 = 0;
					t3 = 0;
					$("#result").html(winner[0]);//var win = winner[0];
					clearInterval(inter)
				}

		}
		var inter = setInterval(drow, 50);
		/*$(document).ready(function(){ show(); setInterval('time()',1000);  });*/
}