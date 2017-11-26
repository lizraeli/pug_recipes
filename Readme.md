# Recipe Management Website

## Setting Up

1. `npm install`
2. `npm start`

On initial run, a `db.json` file will be created in `model/` with some initial recipe data. To reset the recipe data simply delete the `db.json` file and restart the server.

### Project structure

```bash
.
├── app.js
├── package.json
├── README.md
├── nodemon.json
├── routes/
|   ├── index.js
|   └── recipes.js
├── model/
|   ├── db.json
|   └── seed.json
└── views/
    ├── layout.pug
    ├── recipe.pug
    ├── recipeCard.pug
    ├── recipeList.pug
    └── recipeForm.pug
```

## Technologies

* Node
  * [Nodemon](https://github.com/remy/nodemon) to automatically restart the server on local file changes.
* [Express](https://expressjs.com) on top of node to handle requests, routing, etc.
  * [Morgan](https://github.com/expressjs/morgan) to log all incoming requests in the command line.
  * [Body Parser](https://github.com/expressjs/body-parser) to read the body of `POST` requests (e.g. a request to add a new recipe)
* [lowdb](https://github.com/typicode/lowdb) as a small json database for the recipes.
* The [pug](https://pugjs.org/api/getting-started.html) template language for generating HTML pages.
* The [Semantic UI](https://semantic-ui.com) CSS framework to style our components. For the sake of simplicity, we load semantic UI from the client-side using a [cdn](https://www.jsdelivr.com/package/npm/semantic-ui).

### Pug Views

* `layout.pug` - the base view. This is extended by `recipeList.pug`, `recipe.pug` and `recipeForm.pug`. This view is rendered directly on hitting the `/` route.
* `recipeList.pug` - extends `layout.pug`. Creates the `All Recipes` page. Rendered on hitting the `/recipes` route. Imports the `recipeCard.pug` mixin as the layout for each recipe.
* `recipe.pug` - displays a recipe on its own page. Rendered on hitting the `/recipes/id/:id` route.
* `recipeForm` - creates the `Add Recipe` page. Rendered on hitting the `/recipes/new` route.