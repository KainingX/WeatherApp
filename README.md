# A React Hello World Page

A hello world page built with React, Node.js, Express, Babel, and Webpack

A version built with purely React is available [here](https://github.com/KainingX/hello-world-react-only).


## Setup


**1. Install node.js**

Before we start, make sure that you have Node.js downloaded and installed from [website](https://nodejs.org/en/download/).


**2. Download the files**

Download the files and navigate into the folder with command line command.

```
cd hello-world-react-jsx-master
```

**3. Install packages**

Once inside the folder, install the following packages.

React, react-dom, and express:

```
npm install react react-dom express
```

Babel and Webpack:

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli babel-loader
```

## Running the website on localhost

Run Webpack to create a dist folder and a bundle file inside

```
npm run create
```

Run server.js to open the page on a localhost web server

```
node server.js
```


Open the web page at localhost:5000 !


## Built With

* [React](https://reactjs.org/) - Javascript Libaray used
* [Node.js](nodejs.org) - To use node package management
* [Babel](https://babeljs.io/) - JavaScript compiler, transforming JSX syntax
* [Webpack](webpack.js.org) - Module Bundler, loading Babel
* [Express](https://expressjs.com/) - Creating a localhost web server

### Challenges and Leanring
1. Understand what each packages do and decide on which ones I have to use.
