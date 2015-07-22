ntgMessaging.directive('ntgMessageSummary', ['$log', 'messagesService', function ($log, messagesService) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagesummary.tmpl.html',
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
        link: function (scope, element, attrs, ctrl, transclude) {
            scope.messages = messagesService.messagesList;
        }

    };
}]);