ntgMessaging.directive('ntgMessageList', ['$log', 'messagesService', function ($log, messagesService) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagelist.tmpl.html',
        transclude: true,
        scope: {
            messages: '=',
            fromWho: '=',
            subject: '=',
            date: '=',
            details: '=',
            messageStatus: '=',
            messagePriority: '=',
            archiveMessage: '&',
            markAs: '&',
            checkPriority: '&',
            readMessage: '&'
        },
        link: function (scope, element, attrs) {
            console.log(attrs);
        }
    };
}]);