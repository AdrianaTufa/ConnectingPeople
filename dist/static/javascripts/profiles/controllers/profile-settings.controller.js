!function(){"use strict";function e(e,t,r,o,n){function u(){function u(e,t,r,o){c.profile=e.data}function i(t,r,o,u){e.url("/"),n.error("That user does not exist.")}var a=r.getAuthenticatedAccount(),s=t.username.substr(1);a?a.username!==s&&(e.url("/"),n.error("You are not authorized to view this page.")):(e.url("/"),n.error("You are not authorized to view this page.")),o.get(s).then(u,i)}function i(){function e(e,t,o,u){r.unauthenticate(),window.location="/",n.show("Your account has been deleted.")}function t(e,t,r,o){n.error(e.error)}o.destroy(c.profile.username).then(e,t)}function a(){function e(e,t,r,o){n.show("Your profile has been updated.")}function t(e,t,r,o){n.error(e.error)}o.update(c.profile).then(e,t)}var c=this;c.destroy=i,c.update=a,u()}angular.module("thinkster.profiles.controllers").controller("ProfileSettingsController",e),e.$inject=["$location","$routeParams","Authentication","Profile","Snackbar"]}();