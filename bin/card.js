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
  name: chalk.white('Cristian Moreno / khriztianmoreno 👨‍💻 💻 🔻'),
  bio: chalk.white.bold('FullStack Javascript Developer and Community builder. Developer Avocado 🥑 | #React & #Vue Lover 👨🏻‍💻 ♥️ 👨🏻‍🏫 Co-Organize of @MedellinJS @avanet'),
  handle: chalk.cyan('@khriztianmoreno'),
  work: chalk.white('Frontend Developer - Mattersupply'),
  twitter: chalk.cyan('https://twitter.com/khriztianmoreno'),
  github: chalk.cyan('https://github.com/khriztianmoreno'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/khriztianmoreno/'),
  web: chalk.cyan('https://khriztianmoreno.com/'),
  npx: chalk.white('npx khriztianmoreno'),
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
const bio = `${data.bio}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + bio + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))