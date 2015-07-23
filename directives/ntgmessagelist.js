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
        link: function (scope, element, attr, ctrl, transclude) {
            transclude(scope, function (clone, scope) {
                element.append(clone);
            });
        }
    };
}]);