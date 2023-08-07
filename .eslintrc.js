module.exports = {
    root: true,
    env: {
      node: true,
      'vue/setup-compiler-macros': true
    },
  
  
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
  };
  
  