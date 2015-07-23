ntgMessaging.directive('ntgMessageDetails', ['$log', function ($log) {
    'use strict';
    return {
        templateUrl: 'directives/ntgmessagedetails.tmpl.html',
        scope: {
            messages: '=',
            archiveMessage: '&',
            markAs: '&',
            checkPriority: '&',
            readMessage: '&'
        }
    };
}]);