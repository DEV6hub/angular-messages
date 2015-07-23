ntgMessaging.directive('ntgMessageList', ['$log', 'messagesService', function ($log, messagesService) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagelist.tmpl.html',
        transclude: true,
        scope: {
            messages: '=',
            archiveMessage: '&',
            markAs: '&',
            checkPriority: '&',
            readMessage: '&'
        },
    };
}]);