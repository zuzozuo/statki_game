/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.ts":
/*!**********************!*\
  !*** ./src/board.ts ***!
  \**********************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\n\nvar Board = /** @class */ (function () {\n    function Board() {\n        this.board = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];\n    }\n    Board.prototype.draw = function (mainDiv) {\n        // console.log(mainDiv)\n        var html = \"\";\n        var div = document.getElementById(mainDiv);\n        for (var y = 0; y < this.board.length; y++) {\n            html += '<div class=\"y\">';\n            for (var x = 0; x < this.board[y].length; x++) {\n                if (this.board[y][x] != 0) {\n                    html += '<div class=\"x\"  style = \"background-color: rgba(87,48,50, 0.5)\"  data-x=\"' + x + '\" data-y=\"' + y + '\" data-shipId=\"' + this.board[y][x] + '\">' + this.board[y][x] + '</div>';\n                }\n                else {\n                    html += '<div class=\"x\" data-x=\"' + x + '\" data-y=\"' + y + '\" data-shipId=\"' + this.board[y][x] + '\">' + this.board[y][x] + '</div>';\n                }\n            }\n            html += '</div>';\n        }\n        if (div) {\n            div.innerHTML = html;\n        }\n    };\n    Board.prototype.canPlaceOnBoard = function (x, y, dir, len) {\n        var blocksPositions = [];\n        var dV = _enums__WEBPACK_IMPORTED_MODULE_0__[\"ShipDirection\"].Vertical;\n        //let dH = ShipDirection.Horizontal;\n        if (dir == dV) {\n            for (var i = 0; i < len; i++) {\n                blocksPositions.push([x, y]);\n                if (y > _enums__WEBPACK_IMPORTED_MODULE_0__[\"BoardHeight\"] - 1) {\n                    return false;\n                }\n                y++;\n            }\n        }\n        else {\n            for (var i = 0; i < len; i++) {\n                blocksPositions.push([x, y]);\n                if (x > _enums__WEBPACK_IMPORTED_MODULE_0__[\"BoardWidth\"] - 1) {\n                    return false;\n                }\n                x++;\n            }\n        }\n        for (var i = 0; i < blocksPositions.length; i++) {\n            for (var j = -1; j <= 1; j++) {\n                for (var k = -1; k <= 1; k++) {\n                    var boardX = blocksPositions[i][0] + j;\n                    var boardY = blocksPositions[i][1] + k;\n                    if (boardX >= 0 && boardY >= 0 && boardX < 10 && boardY < 10) {\n                        if (this.board[boardY][boardX] != 0) {\n                            return false;\n                        }\n                    }\n                }\n            }\n        }\n        return true;\n    };\n    Board.prototype.placeOnBoard = function (x, y, dir, len, id) {\n        var blocksPositions = [];\n        var dV = _enums__WEBPACK_IMPORTED_MODULE_0__[\"ShipDirection\"].Vertical;\n        //let dH = ShipDirection.Horizontal;\n        if (dir == dV) {\n            for (var i = 0; i < len; i++) {\n                blocksPositions.push([x, y]);\n                y++;\n            }\n        }\n        else {\n            for (var i = 0; i < len; i++) {\n                blocksPositions.push([x, y]);\n                x++;\n            }\n        }\n        for (var i = 0; i < blocksPositions.length; i++) {\n            var boardX = blocksPositions[i][0];\n            var boardY = blocksPositions[i][1];\n            this.board[boardY][boardX] = id;\n        }\n    };\n    Board.prototype.hit = function (x, y, isAccurate) {\n        if (isAccurate) {\n            this.board[y][x] = 2;\n        }\n        else {\n            this.board[y][x] = 1;\n        }\n    };\n    return Board;\n}());\n\n\n\n//# sourceURL=webpack:///./src/board.ts?");

/***/ }),

/***/ "./src/computer.ts":
/*!*************************!*\
  !*** ./src/computer.ts ***!
  \*************************/
/*! exports provided: Computer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Computer\", function() { return Computer; });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.ts\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar Computer = /** @class */ (function (_super) {\n    __extends(Computer, _super);\n    function Computer() {\n        var _this = _super.call(this) || this;\n        _this.DBU = \"BoardComputer\"; //DivBoardUser\n        return _this;\n        //console.log(\"Uruchamiam konstruktor klasy COMPUTER\");\n    }\n    Computer.prototype.shipsPlacing = function () {\n        for (var i = this.ships.length - 1; i >= 0; i--) {\n            while (true) {\n                var randX = Math.floor((Math.random() * _enums__WEBPACK_IMPORTED_MODULE_1__[\"BoardWidth\"]));\n                var randY = Math.floor((Math.random() * _enums__WEBPACK_IMPORTED_MODULE_1__[\"BoardHeight\"]));\n                var randDir = void 0;\n                if (Math.floor((Math.random() * 2)) == 0) {\n                    randDir = _enums__WEBPACK_IMPORTED_MODULE_1__[\"ShipDirection\"].Vertical;\n                }\n                else {\n                    randDir = _enums__WEBPACK_IMPORTED_MODULE_1__[\"ShipDirection\"].Horizontal;\n                }\n                if (this.myBoard.canPlaceOnBoard(randX, randY, randDir, this.ships[i].length)) {\n                    this.myBoard.placeOnBoard(randX, randY, randDir, this.ships[i].length, this.ships[i].shipId);\n                    break;\n                }\n            }\n        }\n    };\n    Computer.prototype.computerShooting = function () {\n        while (true) {\n            var randX = Math.floor((Math.random() * _enums__WEBPACK_IMPORTED_MODULE_1__[\"BoardWidth\"]));\n            var randY = Math.floor((Math.random() * _enums__WEBPACK_IMPORTED_MODULE_1__[\"BoardHeight\"]));\n            if (this.opponentBoard.board[randY][randX] == 0) { ///MOŻE STRZELIĆ ALE NIE TRAFIŁ\n                this.opponentBoard.hit(randX, randY, false);\n                return ([randX, randY]);\n            }\n        }\n    };\n    return Computer;\n}(_user__WEBPACK_IMPORTED_MODULE_0__[\"User\"]));\n\n\n\n//# sourceURL=webpack:///./src/computer.ts?");

/***/ }),

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/*! exports provided: GameModes, ShipDirection, BoardWidth, BoardHeight, Ships, Timeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameModes\", function() { return GameModes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShipDirection\", function() { return ShipDirection; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoardWidth\", function() { return BoardWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoardHeight\", function() { return BoardHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ships\", function() { return Ships; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Timeout\", function() { return Timeout; });\nvar GameModes;\n(function (GameModes) {\n    GameModes[GameModes[\"NothingHappens\"] = 0] = \"NothingHappens\";\n    GameModes[GameModes[\"PlayerPlacing\"] = 1] = \"PlayerPlacing\";\n    GameModes[GameModes[\"ComputerPlacing\"] = 2] = \"ComputerPlacing\";\n    GameModes[GameModes[\"PlayerShooting\"] = 3] = \"PlayerShooting\";\n    GameModes[GameModes[\"ComputerShooting\"] = 4] = \"ComputerShooting\";\n    GameModes[GameModes[\"EndGame\"] = 5] = \"EndGame\";\n})(GameModes || (GameModes = {}));\nvar ShipDirection;\n(function (ShipDirection) {\n    ShipDirection[ShipDirection[\"Vertical\"] = 0] = \"Vertical\";\n    ShipDirection[ShipDirection[\"Horizontal\"] = 1] = \"Horizontal\";\n})(ShipDirection || (ShipDirection = {}));\nvar BoardWidth = 10;\nvar BoardHeight = 10;\nvar Ships = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];\nvar Timeout = 1000;\n\n\n//# sourceURL=webpack:///./src/enums.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.ts\");\n/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer */ \"./src/computer.ts\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\n\n\n\nvar Game = /** @class */ (function () {\n    function Game() {\n        this.mode = _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].NothingHappens;\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"Player\"]();\n        this.computer = new _computer__WEBPACK_IMPORTED_MODULE_1__[\"Computer\"]();\n        this.chosenShip = null; // wybrany statek do wstawienia\n        this.pointerShip = null; //statek do ustawienia, jest nad plansza po wybraniu \n        this.infoForPlayer = document.getElementById(\"infoForPlayer\");\n        this.infoForComputer = document.getElementById(\"infoForComputer\");\n        this.playerCounter = 0;\n    }\n    Game.prototype.init = function () {\n        var _this = this;\n        this.mode = _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].ComputerPlacing;\n        if (this.infoForPlayer) {\n            this.infoForPlayer.innerHTML = \"<p>Komputer rozstawia statki...</p>\";\n        }\n        var boards = document.getElementsByClassName(\"board\");\n        var shipsMenu = document.getElementById(\"shipsMenu\");\n        window.oncontextmenu = this.onContextMenu.bind(this);\n        for (var i = 0; i < boards.length; i++) {\n            boards[i].addEventListener(\"mouseover\", this.onMouseOver.bind(this));\n            boards[i].addEventListener(\"click\", this.onMouseClick.bind(this));\n        }\n        this.player.init();\n        this.computer.init();\n        this.computer.shipsPlacing();\n        setTimeout(function () {\n            _this.mode = _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].PlayerPlacing;\n            if (_this.infoForPlayer) {\n                _this.infoForPlayer.innerHTML = \"\";\n            }\n            if (_this.infoForComputer) {\n                _this.infoForComputer.innerHTML = \"<p>Przeciwnik rozstawia statki...</p>\";\n            }\n        }, _enums__WEBPACK_IMPORTED_MODULE_2__[\"Timeout\"]);\n        if (shipsMenu) {\n            this.player.drawMenu(shipsMenu, this.onMenuClick.bind(this));\n        }\n        this.update();\n    };\n    Game.prototype.shipRotation = function (x, y, dir, len, div) {\n        if (dir == _enums__WEBPACK_IMPORTED_MODULE_2__[\"ShipDirection\"].Vertical) {\n            if (y >= _enums__WEBPACK_IMPORTED_MODULE_2__[\"BoardHeight\"] - len + 1) {\n                y = _enums__WEBPACK_IMPORTED_MODULE_2__[\"BoardHeight\"] - len;\n            }\n        }\n        else if (dir == _enums__WEBPACK_IMPORTED_MODULE_2__[\"ShipDirection\"].Horizontal) {\n            if (x >= _enums__WEBPACK_IMPORTED_MODULE_2__[\"BoardWidth\"] - len + 1) {\n                x = _enums__WEBPACK_IMPORTED_MODULE_2__[\"BoardWidth\"] - len;\n            }\n        }\n        div.style.left = String(x * 22) + 'px';\n        div.style.top = String(y * 22) + 'px';\n    };\n    //--------------------------------------------------------------------\n    Game.prototype.onMouseClick = function (e) {\n        //console.log(\"MouseClick\")\n        var el = e.target;\n        if (el.className == \"x\") {\n            var id = el.parentNode.parentNode.id;\n            switch (this.mode) {\n                case _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].PlayerPlacing:\n                    if (id == \"BoardPlayerMine\") {\n                        if (this.chosenShip != null) {\n                            if (this.pointerShip) {\n                                var x = parseInt(el.dataset.x);\n                                var y = parseInt(el.dataset.y);\n                                var shipLen = this.chosenShip.length;\n                                var dir = this.chosenShip.direction;\n                                if (this.player.myBoard.canPlaceOnBoard(x, y, dir, shipLen)) {\n                                    this.player.myBoard.placeOnBoard(x, y, dir, shipLen, this.chosenShip.shipId);\n                                    this.update();\n                                    this.playerCounter++;\n                                    if (this.playerCounter == this.player.ships.length) {\n                                        this.computersTurn();\n                                    }\n                                    this.chosenShip = null;\n                                    this.pointerShip = null;\n                                }\n                            }\n                        }\n                    }\n                    break;\n                case _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].PlayerShooting:\n                    if (id == \"BoardPlayerOpponent\") {\n                        //TODO\n                        var x = parseInt(el.dataset.x);\n                        var y = parseInt(el.dataset.y);\n                        var shootingCoords = this.player.playerShooting(x, y);\n                        if (shootingCoords) {\n                            if (this.computer.isShoot(shootingCoords[0], shootingCoords[1])) {\n                                this.player.opponentBoard.hit(shootingCoords[0], shootingCoords[1], true);\n                            }\n                        }\n                        this.update();\n                        this.computersTurn();\n                    }\n                    break;\n                case _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].ComputerShooting:\n                    console.log(\"Strzelające komputery!\");\n                    break;\n            }\n        }\n    };\n    Game.prototype.computersTurn = function () {\n        var _this = this;\n        this.mode = _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].ComputerShooting;\n        if (this.infoForPlayer) {\n            this.infoForPlayer.innerHTML = \"Komputer się zastanawia....\";\n        }\n        if (this.infoForComputer) {\n            this.infoForComputer.innerHTML = \"Twój ruch...\";\n        }\n        setTimeout(function () {\n            var shootingCoords = _this.computer.computerShooting();\n            if (_this.player.isShoot(shootingCoords[0], shootingCoords[1])) { //TRAFIŁ\n                _this.computer.opponentBoard.hit(shootingCoords[0], shootingCoords[1], true);\n            }\n            _this.update();\n            _this.mode = _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].PlayerShooting;\n            if (_this.infoForComputer) {\n                _this.infoForComputer.innerHTML = \"Ruch przeciwnika...\";\n            }\n            if (_this.infoForPlayer) {\n                _this.infoForPlayer.innerHTML = \"Twój ruch....\";\n            }\n        }, _enums__WEBPACK_IMPORTED_MODULE_2__[\"Timeout\"]);\n    };\n    Game.prototype.onContextMenu = function (e) {\n        e.preventDefault();\n        var el = e.target;\n        if (el.className == \"x\") {\n            var id = el.parentNode.parentNode.id;\n            switch (this.mode) {\n                case _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].PlayerPlacing:\n                    if (id == \"BoardPlayerMine\") {\n                        if (this.chosenShip != null) {\n                            if (this.pointerShip) {\n                                var x = parseInt(el.dataset.x);\n                                var y = parseInt(el.dataset.y);\n                                var shipLen = this.chosenShip.length;\n                                var div = this.pointerShip;\n                                switch (this.chosenShip.direction) {\n                                    case _enums__WEBPACK_IMPORTED_MODULE_2__[\"ShipDirection\"].Vertical:\n                                        this.chosenShip.direction = _enums__WEBPACK_IMPORTED_MODULE_2__[\"ShipDirection\"].Horizontal;\n                                        this.shipRotation(x, y, this.chosenShip.direction, shipLen, div);\n                                        this.chosenShip.changeDirectionStyle(this.chosenShip.direction, div, shipLen);\n                                        break;\n                                    case _enums__WEBPACK_IMPORTED_MODULE_2__[\"ShipDirection\"].Horizontal:\n                                        this.chosenShip.direction = _enums__WEBPACK_IMPORTED_MODULE_2__[\"ShipDirection\"].Vertical;\n                                        this.shipRotation(x, y, this.chosenShip.direction, shipLen, div);\n                                        this.chosenShip.changeDirectionStyle(this.chosenShip.direction, div, shipLen);\n                                        break;\n                                }\n                                //console.log(\"OnContext\")\n                            }\n                        }\n                    }\n                    break;\n                case _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].PlayerShooting:\n                    if (id == \"BoardPlayerOpponent\") {\n                        //TODO\n                    }\n                    break;\n            }\n        }\n        return false;\n    };\n    Game.prototype.onMouseOver = function (e) {\n        var el = e.target;\n        if (el.className == \"x\") {\n            var id = el.parentNode.parentNode.id;\n            switch (this.mode) {\n                case _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].PlayerPlacing:\n                    if (id == \"BoardPlayerMine\") {\n                        if (this.chosenShip != null) {\n                            if (this.pointerShip) {\n                                var x = parseInt(el.dataset.x);\n                                var y = parseInt(el.dataset.y);\n                                var shipLen = this.chosenShip.length;\n                                this.shipRotation(x, y, this.chosenShip.direction, shipLen, this.pointerShip);\n                                if (this.player.myBoard.canPlaceOnBoard(x, y, this.chosenShip.direction, shipLen)) {\n                                    this.pointerShip.style.backgroundColor = \"green\";\n                                }\n                                else {\n                                    this.pointerShip.style.backgroundColor = \"red\";\n                                }\n                            }\n                        }\n                    }\n                    break;\n                case _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].PlayerShooting:\n                    if (id == \"BoardPlayerOpponent\") {\n                        //TODO\n                    }\n                    break;\n            }\n        }\n    };\n    Game.prototype.onMenuClick = function (ship) {\n        var board = document.getElementById(\"BoardPlayerMine\");\n        if (this.mode != _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].PlayerPlacing) {\n            return false;\n        }\n        if (this.chosenShip != null) {\n            return false;\n        }\n        this.chosenShip = ship;\n        this.pointerShip = document.createElement(\"div\");\n        this.pointerShip.id = \"pointerShip\";\n        if (board) {\n            this.pointerShip.innerHTML = ship.returnShipContainer();\n            board.appendChild(this.pointerShip);\n        }\n        //console.log(ship)\n        return true;\n    };\n    //--------------------------------------------------------------------\n    Game.prototype.update = function () {\n        this.player.update();\n        this.computer.update();\n        if (this.computer.isDead()) {\n            this.mode = _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].EndGame;\n            console.log(\"Kompjuter umarł\");\n            if (this.infoForComputer) {\n                this.infoForComputer.innerHTML = \"Umarłeś komputerku!.\";\n            }\n            if (this.infoForPlayer) {\n                this.infoForPlayer.innerHTML = \"Wygrałeś Plejerze!\";\n            }\n        }\n        if (this.player.isDead()) {\n            console.log(\"Plejer umarł\");\n            this.mode = _enums__WEBPACK_IMPORTED_MODULE_2__[\"GameModes\"].EndGame;\n            if (this.infoForComputer) {\n                this.infoForComputer.innerHTML = \"Wygrałeś komputerku!.\";\n            }\n            if (this.infoForPlayer) {\n                this.infoForPlayer.innerHTML = \"Przegrałeś Plejerze!\";\n            }\n        }\n        console.log(\"UPDATE\");\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./src/user.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player() {\n        var _this = _super.call(this) || this;\n        _this.DBU = \"BoardPlayer\"; //DivBoardUser\n        return _this;\n        // console.log(\"Uruchamiam konstruktor klasy PLAYER\")\n    }\n    Player.prototype.drawMenu = function (menu, callBack) {\n        for (var i = this.ships.length - 1; i >= 0; i--) {\n            this.ships[i].drawOnMenu(menu, callBack);\n        }\n    };\n    Player.prototype.playerShooting = function (x, y) {\n        if (this.opponentBoard.board[y][x] == 0) { ///MOŻE STRZELIĆ ALE NIE TRAFIŁ\n            this.opponentBoard.hit(x, y, false);\n            return ([x, y]);\n        }\n    };\n    return Player;\n}(_user__WEBPACK_IMPORTED_MODULE_0__[\"User\"]));\n\n\n\n//# sourceURL=webpack:///./src/player.ts?");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var button = document.getElementById(\"start-btn\");\n    var startDiv = document.getElementById(\"start\");\n    if (button) {\n        button.addEventListener(\"click\", function () {\n            if (startDiv) {\n                startDiv.className = \"not-visible\";\n                var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]();\n                game.init();\n            }\n        });\n    }\n});\n\n\n//# sourceURL=webpack:///./src/script.ts?");

/***/ }),

/***/ "./src/ship.ts":
/*!*********************!*\
  !*** ./src/ship.ts ***!
  \*********************/
/*! exports provided: Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ship\", function() { return Ship; });\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\n\nvar Ship = /** @class */ (function () {\n    function Ship(length, id) {\n        this.length = length;\n        this.direction = _enums__WEBPACK_IMPORTED_MODULE_0__[\"ShipDirection\"].Vertical;\n        this.shipId = id;\n        this.hitCounter = 0;\n        this.isSunken = false;\n        //console.log(\"Tworze nowy ship o dł: \" + this.length)\n    }\n    Ship.prototype.drawOnMenu = function (menu, callBack) {\n        var _this = this;\n        var shipContainer = document.createElement('div');\n        shipContainer.className = 'shipContainer';\n        shipContainer.innerHTML = this.returnShipContainer();\n        menu.appendChild(shipContainer);\n        shipContainer.addEventListener(\"click\", function () {\n            if (callBack(_this) == true) {\n                menu.removeChild(shipContainer);\n            }\n        });\n    };\n    Ship.prototype.returnShipContainer = function () {\n        var text = '';\n        for (var i = 0; i < this.length; i++) {\n            text += '<div class=\"shipBlock\"></div>';\n        }\n        return text;\n    };\n    Ship.prototype.addHitCounter = function () {\n        this.hitCounter++;\n        if (this.hitCounter == this.length) {\n            this.isSunken = true;\n        }\n    };\n    Ship.prototype.changeDirectionStyle = function (dir, div, len) {\n        //console.log(dir, div);\n        switch (dir) {\n            case _enums__WEBPACK_IMPORTED_MODULE_0__[\"ShipDirection\"].Horizontal:\n                div.style.height = \"22px\";\n                div.style.width = String(len * 22) + \"px\";\n                break;\n            case _enums__WEBPACK_IMPORTED_MODULE_0__[\"ShipDirection\"].Vertical:\n                div.style.width = \"22px\";\n                div.style.height = String(len * 22) + \"px\";\n                break;\n        }\n    };\n    return Ship;\n}());\n\n\n\n//# sourceURL=webpack:///./src/ship.ts?");

/***/ }),

/***/ "./src/ships.ts":
/*!**********************!*\
  !*** ./src/ships.ts ***!
  \**********************/
/*! exports provided: Ships */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ships\", function() { return Ships; });\nvar Ships = /** @class */ (function () {\n    function Ships() {\n        this.listOfShips = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];\n    }\n    return Ships;\n}());\n\n\n\n//# sourceURL=webpack:///./src/ships.ts?");

/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.ts\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.ts\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ \"./src/enums.ts\");\n\n\n\nvar User = /** @class */ (function () {\n    function User() {\n        this.DBU = \"\";\n        this.myBoard = new _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"]();\n        this.opponentBoard = new _board__WEBPACK_IMPORTED_MODULE_0__[\"Board\"]();\n        this.ships = [];\n        this.sunkenShips = [];\n        //console.log(\"Uruchamiam konstruktor klasy USER\")\n    }\n    User.prototype.init = function () {\n        for (var i = 0; i < _enums__WEBPACK_IMPORTED_MODULE_2__[\"Ships\"].length; i++) {\n            this.ships.push(new _ship__WEBPACK_IMPORTED_MODULE_1__[\"Ship\"](_enums__WEBPACK_IMPORTED_MODULE_2__[\"Ships\"][i], i + 1));\n        }\n    };\n    User.prototype.update = function () {\n        this.myBoard.draw(this.DBU + \"Mine\");\n        this.opponentBoard.draw(this.DBU + \"Opponent\");\n    };\n    User.prototype.isDead = function () {\n        for (var i = 0; i < this.ships.length; i++) {\n            if (this.ships[i].isSunken == true) {\n                console.log(\"zatopiony!\");\n                this.sunkenShips.push(this.ships[i]);\n                this.ships.splice(i, 1);\n            }\n        }\n        if (this.sunkenShips.length == _enums__WEBPACK_IMPORTED_MODULE_2__[\"Ships\"].length) {\n            return true;\n        }\n        return false;\n    };\n    User.prototype.isShoot = function (x, y) {\n        if (this.myBoard.board[y][x] != 0) {\n            var shipInfo = this.myBoard.board[y][x];\n            for (var i = 0; i < this.ships.length; i++) {\n                if (this.ships[i].shipId == shipInfo) {\n                    this.ships[i].addHitCounter();\n                }\n            }\n            return true;\n        }\n        else {\n            return false;\n        }\n    };\n    return User;\n}());\n\n\n\n//# sourceURL=webpack:///./src/user.ts?");

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************!*\
  !*** multi ./src/script.ts ./src/board.ts ./src/ships.ts ./src/user.ts ./src/computer.ts ./src/player.ts ./src/game.ts ./src/enums.ts ./src/ship.ts ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/script.ts */\"./src/script.ts\");\n__webpack_require__(/*! ./src/board.ts */\"./src/board.ts\");\n__webpack_require__(/*! ./src/ships.ts */\"./src/ships.ts\");\n__webpack_require__(/*! ./src/user.ts */\"./src/user.ts\");\n__webpack_require__(/*! ./src/computer.ts */\"./src/computer.ts\");\n__webpack_require__(/*! ./src/player.ts */\"./src/player.ts\");\n__webpack_require__(/*! ./src/game.ts */\"./src/game.ts\");\n__webpack_require__(/*! ./src/enums.ts */\"./src/enums.ts\");\nmodule.exports = __webpack_require__(/*! ./src/ship.ts */\"./src/ship.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/script.ts_./src/board.ts_./src/ships.ts_./src/user.ts_./src/computer.ts_./src/player.ts_./src/game.ts_./src/enums.ts_./src/ship.ts?");

/***/ })

/******/ });