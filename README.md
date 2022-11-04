## Quotes-Generator

This is a website for generating random quotes which can be tweeted. It uses basic HTML, CSS, and JS with a few helpful packages.


`Generate` button: picks text and author out of a list of quotes from quote.js

`tweet this`. redirect you to tweet text box url with the quote you generated

`copy` button: qoute basically copies the current quote

`Download` button: uses the package [npm-text-image](https://www.npmjs.com/package/text-image) to capture and format the quote to image/png and saves it to your local storage.

Please give this project a star 🌟 and don't forget to follow me 😊.

If you are looking to make your first contribution, follow the steps below.
Check the CONTRIBUTING.md file if you are already familiar with the git workflow.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

#### If you don't have git on your machine, [install it](https://help.github.com/articles/set-up-git/).

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

For example:

```
git clone https://github.com/this-is-you/Quotes-Generator.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the Quotes-Generator repository on GitHub to your computer.

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd Quotes-Generator
```

Now create a branch using the `git checkout` command:

```
git checkout -b your-new-branch-name
```

For example:

```
git checkout -b add-whatever-you-want
```

## Make necessary changes and commit those changes

<img align="right" width="450" src="https://firstcontributions.github.io/assets/Readme/git-status.png" alt="git status" />

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add Contributors.md
```

Now commit those changes using the `git commit` command:

```
git commit -m "Add <...>"
```

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin -u <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Soon I'll be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged.

## Run In Docker

```
docker build -t quotegen ./
docker run -p 8080:80 quotegen
```

Then open localhost:8080 from local browser.
