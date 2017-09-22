# API

## How to run current project
Restore npm packages ...
```
npm install
```

... and run the project
```
nodemon server.js
```


## How to start new Azure Mobile Apps project

### 1. Initialize project
```
npm init --yes
```

### 2. Install required modules

Install express base module
```
npm install express --save
```

Install azure mobile apps middleware
```
npm install azure-mobile-apps --save
```

Install swagger ui for better integration experience
```
npm install swagger-ui@2.2.10 --save
```

### 3. Install recommended dev modules

Install sqlite3 enabling offline development experience
```
npm install sqlite3 --save-dev
```

Install nodemon globally
```
sudo npm install nodemon -g
```

### 4. Create azure mobile app server.js file

Create new server.js file 
```
touch server.js
```

Put some sample code inside
```

```


### 5. Run

Run project
```
nodemon server.js
```