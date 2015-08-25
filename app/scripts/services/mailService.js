'use strict';
angular.module('madhuriMaitraApp')
    .factory('mailService', function($http) {
        var factory = {}

        factory.sendMail = function(to, from, subject, message) {
            $http.post('../scripts/php/mail.php', {
                'to': to,
                'from': from,
                'subject': subject,
                'message': message
            }).success(function(data, status, headers, config) {
                if (data.msg != '') {
                    return status;
                } else {
                    return error;
                }
            }).error(function(data, status) {
                return status;
            });
        };

        return factory;

    });
