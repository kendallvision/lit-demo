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

## Try this for styles
<pre>
   static styles:CSSResult = css `
        :host div {
            display: block;
            width: 350px;
            height: 200px;
            background-color: rosybrown;
            font-size: 18pt;
            font-weight: bold;
            border: 1px solid black;
            box-shadow: 2px 2px #aeaeae;
            border-radius: 10px;
            margin: 10px;
            padding: 10px;
            cursor: pointer;
            user-select: none;
            -ms-user-select: none;
        }
    `
</pre>
