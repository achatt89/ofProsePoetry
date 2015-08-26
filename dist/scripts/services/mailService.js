'use strict';
angular.module('madhuriMaitraApp')
    .factory('mailService', function($http) {
        var factory = {}

        factory.sendMail = function(to, from, subject, message) {
            $http({
                method: 'POST',
                url: '../scripts/php/mail.php',
                data: {
                    'to': to,
                    'from': from,
                    'subject': subject,
                    'message': message
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
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
