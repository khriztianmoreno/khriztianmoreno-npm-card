[![Twitch](https://img.shields.io/twitch/status/redisinc?style=social)](https://www.twitch.tv/khriztianmoreno)
[![YouTube](https://img.shields.io/youtube/channel/views/UCD78lHSwYqMlyetR0_P4Vig?style=social)](https://www.youtube.com/khriztianmoreno)
[![Twitter](https://img.shields.io/twitter/follow/khriztianmoreno?style=social)](https://twitter.com/khriztianmoreno)

My npm card inspired by [bitandbang](https://github.com/bnb/bitandbang)

Run 
Via npx

```
$ npx khriztianmoreno
```

Stetps

1. You can fork in the repo of [bitandbang](https://github.com/bnb/bitandbang) or just go creating your files.

```bash
# Create new folder
$ mkdir khriztianmoreno && cd $_

# Init the npm package
$ npm init
```

2. Install the dependencies
```bash
# dependencies
$ npm i -S boxen chalk

# Dev dependencies
$ npm i -D standard
```

3. Create the personal card

```bash
# Create bin folder
$ mkdir bin && cd $_

# Create the card.js file
$ touch card.js
```

4. Add personal information to your card
```js
#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('YOUR NAME / '),
  handle: chalk.cyan('HANDLENAME'),
  work: chalk.white('WHERE DO YOU WORK'),
  twitter: chalk.cyan('TWITTER ACCOUNT'),
  github: chalk.cyan('GITHUB ACCOUNT'),
  linkedin: chalk.cyan('LINKEDIN ACCOUNT'),
  web: chalk.cyan('YOUR WEBSITE'),
  npx: chalk.white('npx YOUR_ALIAS'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
```

5. Create an account in [npm.org](https://www.npmjs.com/), if you already have it, skip this step

6. Know the version of your package dependency
```bash
$ npm version major
```

7. Add your npm user - login

```bash
$ npm adduser 
```

8. Publish your package
```bash
$ npm publish
```
9. Run your npm-package card
```bash
$ npx khriztianmoreno
```
