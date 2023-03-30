module.exports = {
  chrome: {
    browserName: 'chrome',
    browserVersion: 'latest',
    platformName: 'macOS 12',
    
    'goog:chromeOptions': {
      args: [
        '--enable-automation'
      ],
    },
    acceptInsecureCerts: true,
    'sauce:options': {
      screenResolution: '2048x1536',
      extendedDebugging: true
    },
  },

  firefox: {
    browserName: 'firefox',
    browserVersion: 'latest',
    platformName: 'macOS 12',
    'sauce:options': {
      screenResolution: '2048x1536',
    },
  },

  safari: {
    browserName: 'safari',
    browserVersion: '15',
    platformName: 'macOS 12',
    'sauce:options': {
      screenResolution: '2048x1536',
    },
  },

  edge: {
    browserName: 'MicrosoftEdge',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'sauce:options': {
      screenResolution: '1920x1080',
    },
  },
};
