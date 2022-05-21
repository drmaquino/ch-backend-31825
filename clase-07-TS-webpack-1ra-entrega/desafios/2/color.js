function getRandomNumberInRange(desde, hasta) {
    return Math.floor(Math.random() * (hasta - desde)) + desde;
}
function getNum0a255() {
    return getRandomNumberInRange(0, 256);
}
var Color = /** @class */ (function () {
    function Color() {
    }
    Color.prototype.get = function () {
        return "rgb(" + getNum0a255() + "," + getNum0a255() + "," + getNum0a255() + ")";
    };
    return Color;
}());
var color = new Color();
console.log(color.get());
