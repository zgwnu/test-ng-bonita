/**
 * Add barrels and stuff
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        packages: {
        '../ng-bonita/src': { main: './index.js' },
        '../ng-bonita/src/authentication': { main: './index.js' },
        '../ng-bonita/src/bdm': { main: './index.js' },
        '../ng-bonita/src/bpm': { main: './index.js' },
        '../ng-bonita/src/bpm/activity': { main: './index.js' },
        '../ng-bonita/src/bpm/case': { main: './index.js' },
        '../ng-bonita/src/bpm/data': { main: './index.js' },
        '../ng-bonita/src/bpm/document': { main: './index.js' },
        '../ng-bonita/src/bpm/human-task': { main: './index.js' },
        '../ng-bonita/src/bpm/process': { main: './index.js' },
        '../ng-bonita/src/bpm/task': { main: './index.js' },
        '../ng-bonita/src/bpm/user-task': { main: './index.js' },
        '../ng-bonita/src/file-upload': { main: './index.js' },
        '../ng-bonita/src/rest-api': { main: './index.js' },
        // add packages here
        }
    });
})(this);
