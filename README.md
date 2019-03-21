# Lit-Element Demo Application

This project demonstates the following disciplines:
* Google Polymer LitElement components
* Using Webpack to successfully integrate LitElement with Typescript and Polymer Decorators
* Smooth rendering using "unresolved"
* Polymer LitElement support on Chrome, Edge, and Safari.

## Getting Started

You will need to issue the following commands to get started the first time:

<pre>
npm install
npm run build
npm start
</pre>

## Available Scripts

In the project directory, you can run:

### 'npm run build'

Invokes WebPack and TypeScript to compile and bundle the application.  Output is to the DIST directory.

### 'npm start'

Starts the Polymer local serve application and opens your default browser to the index.html page.

# Kata Instructions

### Create initial project

* Create project directory
* add 'dist' directory
* add 'src' directory
* add 'src\components' directory

### Install dependencies

* npm init -y
* npm i lit-element --save
* npm i @webcomponents/webcomponentsjs --save

* npm i webpack --save-dev
* npm i webpack-cli --save-dev
* npm i typescript --save-dev
* npm i ts-loader --save-dev

### Prepare Typescript

* tsc --init

Make the following changes to tsconfig.json

* target = "es2015"
* module = "es2015"
* Uncomment moduleResolution = 'node'
* Uncomment experimentalDecorators = 'true'

* Add major option "include" - array with "./src/components/**/*"
* Add major option "exclude" -- array with 'node_modules'

<pre>
    "include": [
        "./src/components/**/*"
    ],
    "exclude": [
        "node_modules"
    ],
</pre>

### Set up webpack.config.js

* Create the config file

<pre>
var path = require('path');

module.exports = {
    entry: "./index.ts",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    mode: "development",
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {test: /\.ts/, use: 'ts-loader'}
        ]
    }
}
</pre>

### Basic App

* Create an example LitElement component in the src\components directory
* Include @customElement, @property
* Create ./index.ts and import the component without extension.
* Create index.html
* Link in an index.css (create the file as well)
* Link in "webcomponents-bundle.js"
* Link in the bundle.js that will be created by the build process in the DIST directory.

### Add scripts to package.json

* "start": "polymer serve --open"
* "build": "webpack --config webpack.config.js"

### Build and test

* npm run build
* npm start

### Prepare for GIT

* git init
* Create a .gitIgnore
* Add 'node_modules' to the file
* Add 'dist' to the file
* Make repository on GitHub
* Make first commit
* Attach to GitHub
* Push first commit
