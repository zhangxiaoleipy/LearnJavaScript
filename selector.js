"use strict";

function select(s) {
    return new select.fn.init(s);
}

select.fn = select.prototype;

select.fn.init = function (s) {
    var nodeList = document.querySelectorAll(s)
    this.length = nodeList.length;
    for (var i = 0; i < this.length; i++) {
        this[i] = nodeList[i];
    }
}

select.fn.init.prototype = select.prototype;

select.fn.each = function (fn) {
    var length = this.length;
    for (var i = 0; i < length; i++) {
        fn.call(this[i]);
    }
}

select.fn.hide = function () {
    this.each(function () {
        this.style.display = "none";
    })
    return this;
}

select.fn.show = function () {
    this.each(function () {
        this.style.display = "block";
    })
    return this;
}

select.fn.css = function (css) {

    var cssList = css.split(/\s*/).join("").split(",");

    this.each(function () {
        for (var item of cssList) {
            this.setAttribute("style", item);
        }
    })
    return this;
}

select.fn.eq = function (n) {

    var newObject = {};

    if (this[n]) {
        newObject[0] = this[n];
    }

    Object.setPrototypeOf(newObject, Object.getPrototypeOf(this));

    newObject.length = 1;

    return newObject;
}

