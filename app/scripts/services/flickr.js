
(function(){
	
	angular.module('app')
		.service('flickrService', function($http, $rootScope){
			
			var getImages = function(tag){
				
				if(tag === undefined){
					tag = '';	
				}
				console.log(tag);
				$http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json' + '&tags=' + tag).success(function (data) {

				});
			};
			
			jsonFlickrFeed = function(data){ 
				$rootScope.$broadcast('flickr-response', data);
			};
			
			return {
				getImages:getImages
			};
		});
}());