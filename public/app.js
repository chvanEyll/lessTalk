var mainApp = angular.module("mainApp", ['ngResource']);

mainApp.controller('articleController', ['$scope', "$http", "$resource", function($scope,$http,$resource) {
	
	var Article = $resource("/api/articles/");
	
	Article.query(function (results) {
		
		$scope.articleList = results;
		
	})
	
	$scope.articleList = []
	$scope.addLink = function() {
		
		var article = new Article();
		article.title=$scope.articleList.newArticleURL;
		article.url=$scope.articleList.newArticleURL;
		article.rating=0;
		
		article.$save(function (result) {
			
			$scope.articleList.push(article);
			  
			});
		
		}
	
	}
]);
