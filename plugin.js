// @ts-check

const ts = require('typescript');
const { default: transform } = require('typescript-transform-paths');

/**
 * @param {*} options
 * @param {import('typescript').Program} program
 */
function before(options, program) {
  return transform(program, options, { ts });
}

exports.before = before;
