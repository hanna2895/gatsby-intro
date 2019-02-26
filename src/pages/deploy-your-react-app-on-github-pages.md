---
title: "Deploy Your React App on Github Pages"
date: "2019-02-15"
---

_February 15, 2019_

___


Github Pages only serves static files (html, css, js), which means that it doesn’t know what to do with all of the files created by create-react-app. However, that doesn’t mean you can’t deploy and show off your React app.

Here’s how you get your React app up and running on Github Pages:

__1__. Create a Git repository if you don't already have one. You can check this by running 

`git status`.

__2__. Create a new branch, add and commit your changes, and then push it to Github:

`git checkout -b development`

`git add .`

`git commit -m 'created development branch`

`git push origin development`

Github Pages deploys whatever is in your master branch, so we want to make sure that there are only static files present. We’ll do this by saving all the substance of your React app on the _development_ branch, and re-creating the master branch so that it only contains static files.

__3__. Navigate to your repository on Github, click on the Branches tab, and then click ‘Change Default Branch’. Set it to _development._

![Change default branch](/gh-pages/1.png)

![Change default branch](/gh-pages/2.png)

__4__. Delete your master branch on Github. (Don't worry - you've still got one locally)

![Delete master branch](/gh-pages/3.png)

__5__. Switch back to your terminal, and run the following, depending on your package manager of choice:

`npm install gh-pages --save-dev`

or

`yarn add gh-pages --dev`

__6__. Add the following script to your _package.json_:

`"deploy": "gh-pages -d build -b master"`

This script utilizes the `gh-pages` module to create a production build for your React app, push it onto your master branch, and then push it to Github for you.

Your _package.json_ should now contain something that looks like this: 

```
{ 
  “name”: “my-repo-name”, 
  “description”: “my-first-react-app”, 
  “license”: “MIT”,
  “scripts”: { 
    “start”: “npm run start”, 
    “build”: “npm run build”, 
    “deploy”: “gh-pages -d build -b master”, 
  }, 
  “dependencies”: { 
     ...
  },
  "devDependencies": {
    "gh-pages": "^2.0.1"
  }
}
```

This will also work to deploy a site built with Gatsby. The only difference is to replace the script in your _package.json_ with the following:

`"deploy": "gatsby build && gh-pages -d public -b master"

__7__. Run the following command in your terminal: 

`yarn deploy` 

or 

`npm run deploy`

At this stage, you may get an error that says 'build directory does not exist'. If that happens, just create a new directory named `build` at the root of your application and run the command again.

If you get an error saying that the 'pattern in `src` does not match component pattern' at this stage, make sure that all the files and directories in your React app are at the root of the directory where you initialized your Git repository. 

__8__. Confirm that your master branch now only contains static, minified html, js, and css files.

![Check your master](/gh-pages/4.png)
![Check your development](/gh-pages/5.png)

__9__. Click the setting tab, and scroll down to the Github Pages section. Select your master branch from the dropdown menu under Source, and click save.

![Publish](/gh-pages/6.png)

You should now be able to view your site at the URL provided in the green bar in the Github Pages section. I’ve pointed mine at a custom domain, but Github Pages will provide you with a github.io link by default.

It may take a few minutes for the content to update (especially if you’re using a custom domain).

![Finished](/gh-pages/7.png)

Congratulations, you’ve just successfully deployed your first React app using Github Pages!

---

_Thanks so much for reading! This is my first tutorial so if you have any feedback, please don’t hesitate to let me know how I can improve! I built this blog myself and I don't have commenting set up yet, but you can drop me a line on Instagram at_ [@bubu_backpacks](https://instagram.com/bubu_backpacks)