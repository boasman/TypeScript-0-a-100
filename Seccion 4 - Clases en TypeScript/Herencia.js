var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var padre = /** @class */ (function () {
    function padre(_nombre, _apellido) {
        this.nombre = _nombre;
        this.apellido = _apellido;
    }
    padre.prototype.mostrarNombre = function () {
        console.log("el nombre es ".concat(this.nombre, " ").concat(this.apellido));
    };
    return padre;
}());
var Hijo = /** @class */ (function (_super) {
    __extends(Hijo, _super);
    function Hijo(_nombre, _apellido, _edad) {
        var _this = _super.call(this, _nombre, _apellido) || this;
        _this.edad = _edad;
        return _this;
    }
    Hijo.prototype.mostrarNombreHijo = function () {
        var hijo = new Hijo('Elvis', 'Michael', 45);
        console.log(hijo.apellido);
    };
    return Hijo;
}(padre));
