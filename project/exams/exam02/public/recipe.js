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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/recipe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");


(function iife() {
  var appState = {
    pollId: null,
    isLoggedIn: false,
    recipes: [],
    error: ''
  };

  function renderLogin(show) {
    var login = document.querySelector('.login');

    if (show) {
      login.innerHTML = "\n    <label>Username: <input class=\"to-input\"/></label>\n    <button class=\"to-login\" type=\"button\">Login</button>\n  ";
    } else {
      login.innerHTML = "";
    }
  }

  function renderLogout(show) {
    var logout = document.querySelector('.logout');
    var addRecipe = document.querySelector('.add-recipe');

    if (show) {
      logout.innerHTML = "<button class=\"to-logout\" type=\"button\">Logout</button>";
      addRecipe.innerHTML = "<button class=\"to-add-recipe\" type=\"button\">Add New Recipe</button>";
    } else {
      logout.innerHTML = "";
      addRecipe.innerHTML = "";
    }
  }

  function renderErrors(text) {
    document.querySelector('.status').innerHTML = text;
  }

  function renderRecipes(show, list) {
    if (!show) {
      var recipes = document.querySelector('.recipes');
      recipes.innerHTML = "";
    } else {
      var _recipes = document.querySelector('.recipes');

      _recipes.innerHTML = Object.keys(list).map(function (id) {
        return "<li class=\"recipe\" data-id=\"".concat(id, "\">\n                <span class=\"tag\"> Title: </span> <span class=\"content\">").concat(list[id].title, "</span>  \n                <span class=\"tag\"> Author: </span> <span class=\"content\">").concat(list[id].author, "</span></li>\n                ");
      }).join('');
    }

    renderHomePage(false);
  }

  function renderAddRecipeForm(show) {
    if (!show) {
      var _addRecipe = document.querySelector('.add-recipe');

      _addRecipe.innerHTML = "";
    } else {
      var _addRecipe2 = document.querySelector('.add-recipe');

      _addRecipe2.innerHTML = "\n            <div><label class=\"tag\"> Title: </label><input class=\"title\"></input><br></div>\n            <div><label class=\"tag\"> Ingredients:</label><br><textarea  class=\"ingredients\" placeholder=\"Input ingredients here...\" rows=\"4\" cols=\"50\"></textarea><br></div>\n            <div><label class=\"tag\"> Instructions:</label><br> <textarea  class=\"instructions\" placeholder=\"Input instuctions here...\" rows=\"4\" cols=\"50\"></textarea><br></div>\n            <button class=\"to-add\" type=\"button\"> Add Recipe </button>\n";
      renderDetails(false);
      renderRecipes(false);
      renderHomePage(true);
    }
  }

  function renderHomePage(show) {
    var homePage = document.querySelector('.homepage');

    if (!show) {
      homePage.innerHTML = "";
    } else {
      homePage.innerHTML = "<button class=\"to-homepage\" type=\"button\"> Home Page </button>";
    }
  }

  function renderDetails(show, recipe) {
    if (!show) {
      var details = document.querySelector('.details');
      details.innerHTML = "";
    } else {
      var _details = document.querySelector('.details');

      _details.innerHTML = "\n                <div class=\"title\"><span class=\"tag\"> Title: </span><span class=\"content\">".concat(recipe.title, "</span><br></div>\n                <div class=\"author\"><span class=\"tag\"> Author: </span><span class=\"content\">").concat(recipe.author, "</span><br></div>\n                <div class=\"ingredients\"><span class=\"tag\"> Ingredients:</span><br><span class=\"content\">\n                ").concat(recipe.ingredients, "</span><br></div>\n                <div class=\"instructions\"><span class=\"tag\"> Instructions:</span><br><span class=\"content\">\n                ").concat(recipe.instructions, "</span><br></div>\n                ");
      renderRecipes(false);
      renderHomePage(true);
    }
  }

  var homePage = document.querySelector('.homepage');
  homePage.addEventListener('click', function (e) {
    if (!e.target.classList.contains('to-homepage')) {
      return;
    }

    renderPage();
  });

  function renderPage() {
    if (!appState.isLoggedIn) {
      renderLogin(true);
      renderLogout(false);
      renderRecipes(true, appState.recipes);
      renderDetails(false);
    } else {
      renderLogin(false);
      renderLogout(true);
      renderRecipes(true, appState.recipes);
      renderDetails(false);
    }

    renderErrors(appState.error);
  }

  var login = document.querySelector('.login');
  login.addEventListener('click', function (e) {
    if (!e.target.classList.contains('to-login')) {
      return;
    }

    var username = document.querySelector('.to-input').value;

    if (username.length > 0) {
      Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchLogIn"])(username).then(function (list) {
        appState.isLoggedIn = true;
        appState.recipes = list;
        appState.error = '';
        renderPage();
      })["catch"](function (err) {
        appState.error = err.code;
        renderPage();
      });
    } else {
      appState.error = "You must input a username.";
      renderPage();
    }
  });
  var logout = document.querySelector('.logout');
  logout.addEventListener('click', function (e) {
    e.preventDefault();

    if (!e.target.classList.contains('to-logout')) {
      return;
    }

    Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchLogOut"])() // 返回了错误
    .then(function () {
      appState.isLoggedIn = false;
      appState.error = '';
      renderPage();
    })["catch"](function (err) {
      appState.isLoggedIn = false;
      appState.error = err.code;
      renderPage();
    });
  });
  var addRecipe = document.querySelector('.add-recipe');
  addRecipe.addEventListener('click', function (e) {
    if (!e.target.classList.contains('to-add-recipe')) {
      return;
    }

    renderAddRecipeForm(true);
    var toAdd = document.querySelector('.to-add');
    var title = document.querySelector('.title');
    var instructions = document.querySelector('.instructions');
    var ingredients = document.querySelector('.ingredients');
    var recipeId = Math.floor(Math.random() * 10000);
    toAdd.disabled = true;
    title.addEventListener('input', function (e) {
      toAdd.disabled = !(title.value.length > 0 && instructions.value.length > 0 && ingredients.value.length > 0);
    });
    instructions.addEventListener('input', function (e) {
      toAdd.disabled = !(instructions.value.length > 0 && instructions.value.length > 0 && ingredients.value.length > 0);
    });
    ingredients.addEventListener('input', function (e) {
      toAdd.disabled = !(ingredients.value.length > 0 && instructions.value.length > 0 && ingredients.value.length > 0);
    });
    toAdd.addEventListener('click', function (e) {
      var newRecipeDetails = {
        title: "".concat(title.value, " "),
        ingredients: "".concat(ingredients.value, " "),
        instructions: "".concat(instructions.value, " "),
        id: "".concat(recipeId, " ")
      };
      var newRecipe = {
        recipeId: recipeId,
        newRecipeDetails: newRecipeDetails
      };
      Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchAddRecipe"])(newRecipe).then(function (list) {
        appState.recipes = list;
        appState.error = '';
      })["catch"](function (err) {
        appState.error = err.code;
        renderPage();
      }).then(function () {
        Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchSingleRecipe"])(recipeId).then(function (response) {
          renderDetails(true, response);
          renderAddRecipeForm(false);
        });
      });
    });
  });
  var list = document.querySelector(".recipes");
  list.addEventListener('click', function (e) {
    if (e.target.parentNode.classList.contains('recipe')) {
      var id = e.target.parentNode.dataset.id;
      Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchSingleRecipe"])(id).then(function (recipe) {
        renderDetails(true, recipe);
      });
    }
  }); // Initial load 

  Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchLoginStatus"])().then(function () {
    appState.isLoggedIn = true;
    renderPage();
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchRecipes"])()["catch"](function (err) {
      appState.error = err.code;
      renderPage();
    }).then(function (list) {
      appState.error = '';
      appState.recipes = list;
      renderPage();
    });
  })["catch"](function (err) {
    appState.error = err.code;
    appState.isLoggedIn = false;
    renderPage();
    Object(_services__WEBPACK_IMPORTED_MODULE_0__["fetchRecipes"])()["catch"](function (err) {
      appState.error = err.code;
      renderPage();
    }).then(function (list) {
      appState.error = '';
      appState.recipes = list;
      renderPage();
    });
  });
})();

/***/ }),

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/*! exports provided: fetchLogIn, fetchLogOut, fetchLoginStatus, fetchRecipes, fetchAddRecipe, fetchSingleRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLogIn", function() { return fetchLogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLogOut", function() { return fetchLogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLoginStatus", function() { return fetchLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipes", function() { return fetchRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAddRecipe", function() { return fetchAddRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSingleRecipe", function() { return fetchSingleRecipe; });
var fetchLogIn = function fetchLogIn(username) {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      code: 'There is a network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json();
  });
};
var fetchLogOut = function fetchLogOut() {
  return fetch('/session/logout', {
    method: 'POST'
  })["catch"](function () {
    return Promise.reject({
      code: 'There is a network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response;
  });
};
var fetchLoginStatus = function fetchLoginStatus() {
  return fetch('/session', {
    method: 'GET'
  })["catch"](function () {
    console.log('catched');
    return Promise.reject({
      code: 'There is a network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    console.log('responsed');
    return;
  });
};
var fetchRecipes = function fetchRecipes() {
  return fetch('/recipes', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      code: 'There is a network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return Promise.reject({
        code: 'Getting recipes failed'
      });
    }

    return response.json();
  });
};
var fetchAddRecipe = function fetchAddRecipe(recipe) {
  return fetch('/recipes', {
    method: "POST",
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      recipe: recipe
    })
  })["catch"](function () {
    return Promise.reject({
      code: 'There is a network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (result) {
        return Promise.reject(result);
      });
    }

    return response.json();
  });
};
var fetchSingleRecipe = function fetchSingleRecipe(id) {
  return fetch('/recipes/' + id, {
    method: "GET"
  })["catch"](function () {
    return Promise.reject({
      code: 'There is a network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return Promise.reject({
        code: 'Getting details failed'
      });
    }

    return response.json();
  });
};

/***/ })

/******/ });
//# sourceMappingURL=recipe.js.map