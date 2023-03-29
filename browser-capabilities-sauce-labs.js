module.exports = {
  chrome: {
    browserName: 'chrome',
    browserVersion: '^111.0.0',
    platformName: 'macOS 12',
    'goog:chromeOptions': {
      args: [
        '--enable-automation',
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        '--use-file-for-fake-video-capture=/Users/chef/Downloads/btc_qr_address_video.mjpeg',
      ],
    },
    acceptInsecureCerts: true,
    'sauce:options': {
      screenResolution: '2048x1536',
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
