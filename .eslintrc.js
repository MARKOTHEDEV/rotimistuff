module.exports = {
    'env': {
      'browser': true,
      'es2021': true,
      'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
      'ecmaVersion': 12,
      'sourceType': 'module'
    },
    'rules': {
        "no-unknown-property": ["error", { "ignore": ["class"] }], 
        "self-closing-comp": "error"
    }
  };