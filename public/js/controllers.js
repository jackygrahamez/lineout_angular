'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http) {
	var user = $scope.user = {
	      email:     "",
	      password:  "",
	      username:  "",
	      name: {
	          first:   "",
	          last:    ""
	        }	      
	  };
	  $scope.state = /^\w\w$/;
	  $scope.zip = /^\d\d\d\d\d$/;
	 
	  $scope.addContact = function() {
	     user.contacts.push({type:'email', value:''});
	  };
	 
	  $scope.removeContact = function(contact) {
	    for (var i = 0, ii = user.contacts.length; i < ii; i++) {
	      if (contact === user.contacts[i]) {
	        $scope.user.contacts.splice(i, 1);
	      }
	    }
	  };	
    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).
  controller('FormController', function ($scope) {
	    // write Ctrl here

  });
