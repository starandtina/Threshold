(function (wndw) {
  'use strict';

  var config = {
    environment: 'production',
    locale: wndw.navigator.language,
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
      timeRange: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00' , '14:00', '15:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
      operator: {
        '=': 'is equal to (=)',
        '>': 'is greater than (>)',
        '<': 'is less than (<)'
      },
      colors: ['bl-purple', 'bl-light-blue', 'bl-green', 'bl-blue', 'bl-magenta', 'bl-bright-green'],
      sampleData: [{
        id: 'id1',
        at: '01:15',
        util: '01:45',
        operator: '>',
        warning: 1,
        error: 2,
        critical: 3
      }, {
        id: 'id2',
        at: '00:15',
        util: '00:30',
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