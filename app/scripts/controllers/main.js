
angular.module('app')
  .controller('MainCtrl', function ($scope, flickrService) {
	  
	  $scope.$on('flickr-response', function(event, data){
		  $scope.data = data;
		  
		  if(data.items.length > 0){
			  $scope.imagesAvailable = true;
		  }
		  else{
			  $scope.imagesAvailable = false;
		  }
		  console.log(data);
	  });
	  
	  $scope.search = function(tag){
		  flickrService.getImages(tag);
	  };
	  
	  var init = function(){
		  flickrService.getImages('');
	  };

	  init();
    
  });
