(function (wndw) {
  'use strict';

  var config = {
    environment: 'production',
    locale: wndw.navigator.language,
    title: 'Threshold',
    out: 'js/core/config.js',
    log: 'info',
    debug: true,
    url: {
      base: '',
      api: 'http://localhost:3001/api',
      app_assets: '/'
    },
    version: '1.0.0',
    dir: {
      home: '/'
    },
    thresholds: {
      // timeRange should be an object with id for each item, here for simplicity
      timeRange: ['all day', '00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '24:00'],
      operator: {
        '=': 'is equal to (=)',
        '>': 'is greater than (>)',
        '<': 'is less than (<)'
      },
      colors: ['purple', 'light-blue', 'green', 'blue', 'magenta', 'bright-green'],
      sampleData: [{
        at: 'all day',
        until: '13:00',
        operator: '>',
        warning: 1,
        error: 2,
        critical: 3
      }, {
        at: '22:30',
        until: '23:30',
        operator: '>=',
        warning: 11,
        error: 22,
        critical: 33
      }]
    }
  };

  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return config;
    });
  } else {
    return wndw.configure = config;
  }
})(window);