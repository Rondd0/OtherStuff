/**
 * Created by Rado on 20.6.2015 г..
 */

    var left = false;
    var right = false;
    var leftPos = (window.innerWidth / 2 - 50);

/*---------------*/
    var fire;
    var missile;
    var coord;
/*---------------*/

    window.addEventListener('load', function() {

        var ship = document.getElementById('ship');

        ship.style.bottom = 0;

        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 37) {
                left = true;
            } else if (e.keyCode === 39) {
                right = true;
            }
        }, false);

        document.addEventListener('keyup', function(e) {
            if (e.keyCode === 37) {
                left = false;
            } else if (e.keyCode === 39) {
                right = false;
            }
        }, false);

        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 32) {

                fire = true;

                // Get coordinates of the ship
                coord = ship.getBoundingClientRect();

                // Adding a missile on the top of the ship
                var missile = new Missile(coord.left + coord.width/2, coord.bottom - coord.height);
                document.querySelector("body").appendChild(missile);

            }

        }, false);

        document.addEventListener('keyup', function(e) {
            if (e.keyCode === 32) {
                fire = false;
            }
        }, false);

        setInterval(function () {
            if (left) {
                leftPos -= 1;
            }

            if (right) {
                leftPos += 1;
            }

            ship.style.left = leftPos + 'px';
        }, 1)


        /*--------------------------------------------------*/
        var a = document.getElementsByClassName("missile");
        var enemy = document.getElementById("enemy");
        /*--------------------------------------------------*/
        function update() {

            var enemyCoord = enemy.getBoundingClientRect();

            for (var i = 0; i < a.length; i++) {
                var oldTop = parseInt(a[i].style.top);
                var oldLeft = parseInt(a[i].style.left);

                a[i].style.top = (oldTop - 5) + "px";

                if (oldTop <= 0) {
                    a[i].parentNode.removeChild(a[i]);
                }

                if (oldTop <= (enemyCoord.height + enemyCoord.top) && oldLeft >= enemyCoord.left && oldLeft <= (enemyCoord.left + enemyCoord.width)) {
                    a[i].parentNode.removeChild(a[i]);
                }

            }
        }
        setInterval(update, 10);

    }, false);
