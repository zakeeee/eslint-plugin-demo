/**
 * @fileoverview demo
 * @author Pop
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/demo'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('demo', rule, {
  valid: [
    // give me some code that won't trigger a warning
    'console.log',
    'foo',
  ],

  invalid: [
    {
      code: 'console.log()',
      errors: [{ message: 'Bad call' }],
    },
  ],
});
