var geocoder;
var map;
var marker;

$(function () {
	geocoder = new google.maps.Geocoder();
    //国リスト
    var country = [];
    var latlng = new google.maps.LatLng(38.67284653049365, 139.8108074069023);
    var myOptions = {
    	zoom: 3,
    	center: latlng,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("gmap"), myOptions);

    marker = new google.maps.Marker({
    	map: map
    });

    google.maps.event.addListener(map, 'click', function(e) {
    	var latlng = e.latLng;
    	marker.position = latlng;
    	marker.setMap(map);
    	if (geocoder) {
    		geocoder.geocode({ 'latLng': latlng }, function(results, status) {
    			if (status == google.maps.GeocoderStatus.OK) {
    				if (results[0]) {
    					$(".text").text("");
    					var address = results[0].address_components;
    					for (var i = 0; i < address.length; i++) {
    						if(address[i].types[0] == "country") {
    							var country_name = address[i].long_name;
    							country.push(country_name);
    							$("#country").text(country_name);
    						}
    					}

    					if(country_name == "日本"){
    						var title = [];
    						var artist = [];
    						var url = [];
    						var reqURL = "song.xml";
    						$.ajax({
    							url: reqURL,
    							dataType: "xml",
    							success: function(data){
    								$(data).find( 'song' ).each(
    									function(){
    										if( $(this).find( 'country' ).text() == "日本"){
    											title.push( $(this).find( 'title' ).text() );
    											artist.push( $(this).find( 'artist' ).text() );
    											url.push( $(this).find( 'url' ).text() );
    										}
    									});
    							}
    						});

    						$("#play").on("click",function(){
    							var rand = Math.floor( Math.random() * url.length );
    							console.log(title[rand]);
    							$("#title").html(title[rand]);
    							$("#artist").html(artist[rand]);
    							document.getElementById( 'audio' ).src = url[rand];
    							document.getElementById( 'audio' ).currentTime = 0 ;
    							document.getElementById( 'audio' ).play() ;
    						});

    						$("#pause").on("click",function(){
    							document.getElementById( 'audio' ).pause();
    							document.getElementById( 'audio' ).currentTime = 0;
    						});
    					} else if(country_name == "イギリス"){
    						var title = [];
    						var artist = [];
    						var url = [];
    						var reqURL = "song.xml";
    						$.ajax({
    							url: reqURL,
    							dataType: "xml",
    							success: function(data){
    								$(data).find( 'song' ).each(
    									function(){
    										if( $(this).find( 'country' ).text() == "イギリス"){
    											title.push( $(this).find( 'title' ).text() );
    											artist.push( $(this).find( 'artist' ).text() );
    											url.push( $(this).find( 'url' ).text() );
    										}
    									});
    							}
    						});

    						$("#play").on("click",function(){
    							var rand = Math.floor( Math.random() * url.length );
    							console.log(title[rand]);
    							$("#title").html(title[rand]);
    							$("#artist").html(artist[rand]);
    							document.getElementById( 'audio' ).src = url[rand];
    							document.getElementById( 'audio' ).currentTime = 0 ;
    							document.getElementById( 'audio' ).play() ;
    						});

    						$("#pause").on("click",function(){
    							document.getElementById( 'audio' ).pause();
    							document.getElementById( 'audio' ).currentTime = 0;
    						});
    					} else if(country_name == "アメリカ合衆国"){
    						var title = [];
    						var artist = [];
    						var url = [];
    						var reqURL = "song.xml";
    						$.ajax({
    							url: reqURL,
    							dataType: "xml",
    							success: function(data){
    								$(data).find( 'song' ).each(
    									function(){
    										if( $(this).find( 'country' ).text() == "アメリカ合衆国"){
    											title.push( $(this).find( 'title' ).text() );
    											artist.push( $(this).find( 'artist' ).text() );
    											url.push( $(this).find( 'url' ).text() );
    										}
    									});
    							}
    						});

    						$("#play").on("click",function(){
    							var rand = Math.floor( Math.random() * url.length );
    							console.log(title[rand]);
    							$("#title").html(title[rand]);
    							$("#artist").html(artist[rand]);
    							document.getElementById( 'audio' ).src = url[rand];
    							document.getElementById( 'audio' ).currentTime = 0 ;
    							document.getElementById( 'audio' ).play() ;
    						});

    						$("#pause").on("click",function(){
    							document.getElementById( 'audio' ).pause();
    							document.getElementById( 'audio' ).currentTime = 0;
    						});
    					} else if(country_name == "ベトナム"){
    						var title = [];
    						var artist = [];
    						var url = [];
    						var reqURL = "song.xml";
    						$.ajax({
    							url: reqURL,
    							dataType: "xml",
    							success: function(data){
    								$(data).find( 'song' ).each(
    									function(){
    										if( $(this).find( 'country' ).text() == "ベトナム"){
    											title.push( $(this).find( 'title' ).text() );
    											artist.push( $(this).find( 'artist' ).text() );
    											url.push( $(this).find( 'url' ).text() );
    										}
    									});
    							}
    						});

    						$("#play").on("click",function(){
    							var rand = Math.floor( Math.random() * url.length );
    							console.log(title[rand]);
    							$("#title").html(title[rand]);
    							$("#artist").html(artist[rand]);
    							document.getElementById( 'audio' ).src = url[rand];
    							document.getElementById( 'audio' ).currentTime = 0 ;
    							document.getElementById( 'audio' ).play() ;
    						});

    						$("#pause").on("click",function(){
    							document.getElementById( 'audio' ).pause();
    							document.getElementById( 'audio' ).currentTime = 0;
    						});
    					} else {
    						$("#play").on("click",function(){
    							$("#title").html("");
    							$("#artist").html("");
    							document.getElementById( 'audio' ).src = "";
    							document.getElementById( 'audio' ).currentTime = 0 ;
    							document.getElementById( 'audio' ).play() ;
    						});

    						$("#pause").on("click",function(){
    							$("#title").html("");
    							$("#artist").html("");
    							document.getElementById( 'audio' ).pause();
    							document.getElementById( 'audio' ).currentTime = 0;
    						});
    					}

    				}
    			} else {
    				alert("失敗しました：" + status);
    			}
    		});
}
});
});
