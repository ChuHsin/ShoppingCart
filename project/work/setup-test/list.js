const path = require('path');

const people = `
Name           |  NEUID   | Slack handle | github ID
Brett Ritter   | ???      | @swiftone    | swiftone
Xin Qu         |001020392 | @Xin Qu      | ChuHsin

`.split('\n').filter( truthy => truthy );

if (require.main === module) {
  // Run if we are being run directly

  // List the people
  for ( person of people ) {
    console.log(person);
  }
}
// If not being run directly, return the text
module.exports = people;
