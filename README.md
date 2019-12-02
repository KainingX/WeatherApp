# A react hello world page

A hello world page built with React, Node.js, Babel, and WebPack. Start on localhost with http-server node.js package.

Another version built with purly React is avaibale [here]().


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

React and react-dom: 

```
npm install react react-dom

```

Babel, WebPack, and http-server:

```
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli babel-loader http-server

```

## Running the website on localhost

Run WebPack to create a dist folder and a bundle file inside first

```
npm run create

```

Run http-server, then click /dist to show the hello world page

```
npm run start

```

## Built With

* [React](https://reactjs.org/) - Javascript Libaray used
* [Node.js](nodejs.org) - To use node package management
* [Babel](https://babeljs.io/) - JavaScript compiler, transforming JSX syntax
* [WebPack](webpack.js.org) - Module Bundler, loading Babel
* [http-server](www.npmjs.com/package/http-server) - Creating a localhost web server

### Challenges and Leanring
1. Understand what each packages do and decide on which ones I have to use.

