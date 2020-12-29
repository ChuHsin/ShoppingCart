
import {
    fetchLogIn,
    fetchLoginStatus,
    fetchRecipes,
    fetchAddRecipe,
    fetchLogOut,
    fetchSingleRecipe,
} from './services';
(function iife() {
    const appState = {
        pollId: null,
        isLoggedIn: false,
        recipes: [],
        error: '',
    };

    function renderLogin(show) {
        const login = document.querySelector('.login');
        if (show) {
            login.innerHTML = `
    <label>Username: <input class="to-input"/></label>
    <button class="to-login" type="button">Login</button>
  `;
        } else {
            login.innerHTML = ``;
        }
    }

    function renderLogout(show) {
        const logout = document.querySelector('.logout');
        const addRecipe = document.querySelector('.add-recipe');
        if (show) {
            logout.innerHTML = `<button class="to-logout" type="button">Logout</button>`;
            addRecipe.innerHTML = `<button class="to-add-recipe" type="button">Add New Recipe</button>`
        } else {
            logout.innerHTML = ``;
            addRecipe.innerHTML = ``;
        }
    }

    function renderErrors(text) {
        document.querySelector('.status').innerHTML = text;
    }

    function renderRecipes(show, list) {
        if (!show) {
            const recipes = document.querySelector('.recipes');
            recipes.innerHTML = ``;
        } else {
            const recipes = document.querySelector('.recipes');
            recipes.innerHTML = Object.keys(list).map(
                (id) =>
                    `<li class="recipe" data-id="${id}">
                <span class="tag"> Title: </span> <span class="content">${list[id].title}</span>  
                <span class="tag"> Author: </span> <span class="content">${list[id].author}</span></li>
                `).join('');
        }
        renderHomePage(false);

    }

    function renderAddRecipeForm(show) {
        if (!show) {
            const addRecipe = document.querySelector('.add-recipe');
            addRecipe.innerHTML = ``;
        } else {
            const addRecipe = document.querySelector('.add-recipe');
            addRecipe.innerHTML = `
            <div><label class="tag"> Title: </label><input class="title"></input><br></div>
            <div><label class="tag"> Ingredients:</label><br><textarea  class="ingredients" placeholder="Input ingredients here..." rows="4" cols="50"></textarea><br></div>
            <div><label class="tag"> Instructions:</label><br> <textarea  class="instructions" placeholder="Input instuctions here..." rows="4" cols="50"></textarea><br></div>
            <button class="to-add" type="button"> Add Recipe </button>
`
            renderDetails(false);
            renderRecipes(false);
            renderHomePage(true);

        }
    }
    function renderHomePage(show) {
        const homePage = document.querySelector('.homepage');

        if (!show) {
            homePage.innerHTML = ``;
        } else {
            homePage.innerHTML = `<button class="to-homepage" type="button"> Home Page </button>`
        }
    }

    function renderDetails(show, recipe) {
        if (!show) {
            const details = document.querySelector('.details');
            details.innerHTML = ``;
        } else {
            const details = document.querySelector('.details');
            details.innerHTML = `
                <div class="title"><span class="tag"> Title: </span><span class="content">${recipe.title}</span><br></div>
                <div class="author"><span class="tag"> Author: </span><span class="content">${recipe.author}</span><br></div>
                <div class="ingredients"><span class="tag"> Ingredients:</span><br><span class="content">
                ${recipe.ingredients}</span><br></div>
                <div class="instructions"><span class="tag"> Instructions:</span><br><span class="content">
                ${recipe.instructions}</span><br></div>
                `;
            renderRecipes(false);
            renderHomePage(true);
        }

    }

    const homePage = document.querySelector('.homepage');
    homePage.addEventListener('click', (e) => {
        if (!e.target.classList.contains('to-homepage')) {
            return;
        }
        renderPage();
    })

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

    const login = document.querySelector('.login');
    login.addEventListener('click', (e) => {
        if (!e.target.classList.contains('to-login')) {
            return;
        }

        const username = document.querySelector('.to-input').value;
        if(username.length > 0) {
            fetchLogIn(username)
            .then((list) => {
                appState.isLoggedIn = true;
                appState.recipes = list;
                appState.error = '';
                renderPage();
            })
            .catch((err) => {
                appState.error = err.code;
                renderPage();
            });
        } else {
            appState.error = "You must input a username.";
            renderPage();
        }
    });

    const logout = document.querySelector('.logout');

    logout.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.classList.contains('to-logout')) {
            return;
        }

        fetchLogOut() // 返回了错误
            .then(() => {
                appState.isLoggedIn = false;
                appState.error = '';
                renderPage();
            })
            .catch((err) => {
                appState.isLoggedIn = false;
                appState.error = err.code;
                renderPage();
            });
    });

    const addRecipe = document.querySelector('.add-recipe');
    addRecipe.addEventListener('click', (e) => {
        if (!e.target.classList.contains('to-add-recipe')) { return; }
        renderAddRecipeForm(true);


        const toAdd = document.querySelector('.to-add');
        const title = document.querySelector('.title');
        const instructions = document.querySelector('.instructions');
        const ingredients = document.querySelector('.ingredients');
        const recipeId = Math.floor(Math.random() * 10000);

        toAdd.disabled = true;
        title.addEventListener('input', (e) => {
            toAdd.disabled = !(title.value.length > 0 && instructions.value.length > 0 && ingredients.value.length > 0);
        })
        instructions.addEventListener('input', (e) => {
            toAdd.disabled = !(instructions.value.length > 0 && instructions.value.length > 0 && ingredients.value.length > 0);
        })
        ingredients.addEventListener('input', (e) => {
            toAdd.disabled = !(ingredients.value.length > 0 && instructions.value.length > 0 && ingredients.value.length > 0);
        })

        toAdd.addEventListener('click', (e) => {
            const newRecipeDetails = {
                title: `${title.value} `,
                ingredients: `${ingredients.value} `,
                instructions: `${instructions.value} `,
                id: `${recipeId} `,
            }
            const newRecipe = { recipeId, newRecipeDetails }
            fetchAddRecipe(newRecipe)
                .then((list) => {
                    appState.recipes = list;
                    appState.error = '';
                })
                .catch((err) => {
                    appState.error = err.code;
                    renderPage();
                })
                .then(() => {
                    fetchSingleRecipe(recipeId)
                        .then(response => {
                            renderDetails(true, response);
                            renderAddRecipeForm(false);
                        }
                        )
                })

        });
    });

    const list = document.querySelector(".recipes");
    list.addEventListener('click', (e) => {
        if (e.target.parentNode.classList.contains('recipe')) {
            const id = e.target.parentNode.dataset.id;
            fetchSingleRecipe(id)
                .then(recipe => {
                    renderDetails(true, recipe);
                })
        }
    });

    // Initial load 
    fetchLoginStatus()
        .then(() => {
            appState.isLoggedIn = true;
            renderPage();
            fetchRecipes()
                .catch((err) => {
                    appState.error = err.code;
                    renderPage();
                })
                .then(list => {
                    appState.error = '';
                    appState.recipes = list;
                    renderPage();
                })
        })
        .catch((err) => {
            appState.error = err.code;
            appState.isLoggedIn = false;
            renderPage();
            fetchRecipes()
                .catch((err) => {
                    appState.error = err.code;
                    renderPage();
                })
                .then(list => {
                    appState.error = '';
                    appState.recipes = list;
                    renderPage();
                })
        })

})();