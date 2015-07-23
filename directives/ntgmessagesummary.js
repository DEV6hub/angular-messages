ntgMessaging.directive('ntgMessageSummary', ['$log', 'messagesService', function ($log, messagesService) {
    'use strict';

    return {
        templateUrl: 'directives/ntgmessagesummary.tmpl.html',
        transclude: true,
        scope: {
            messages: '=',
            archiveMessage: '&',
            markAs: '&',
            checkPriority: '&',
            readMessage: '&'
        },
        link: function (scope, el, attrs, ctrl, transclude) {}
    };
}]);