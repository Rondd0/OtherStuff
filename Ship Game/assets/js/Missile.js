/**
 * Created by Rado on 21.6.2015 г..
 */

function Missile(left, top) {

    this.element = document.createElement('div');
    this.element.className = "missile";

    this.element.style.top = "" + top + "px";
    this.element.style.left = "" + left + "px";

    return this.element;

}
