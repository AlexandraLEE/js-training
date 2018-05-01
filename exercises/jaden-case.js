'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(Phrase) {
  let splitPhrase = Phrase.toLowerCase().split(' ');
  for (let i = 0; i < splitPhrase.length; i++) {
    splitPhrase[i] = splitPhrase[i].charAt(0).toUpperCase() + splitPhrase[i].substring(
      1);
  }
  return splitPhrase.join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('Stay calm and code'), 'Stay Calm And Code')
assert.strictEqual(jadenCase('When is lunch?'), 'When Is Lunch?')
// End of tests */
