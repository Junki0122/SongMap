chrome.contextMenus.create({
	"title": "現在地からのルートを検索",
	"type": "normal",
	"contexts": ["selection"],
	"onclick": $(function(){
		var geocoder = new google.maps.Geocoder();
		$("#getdata").click(function(){
			geocoder.geocode({
				address: $("#address").val()
			},
			function(data, status){
				if (status == google.maps.GeocoderStatus.OK) {
					var lat = data[0].geometry.location.lat();
					var lng = data[0].geometry.location.lng();
					
					var reqURL = "http://www.panoramio.com/map/get_panoramas.php?";
					var option = "set=public&from=0&to=20";
					option += "&minx=" + (lng - 0.01);
					option += "&miny=" + (lat - 0.01);
					option += "&maxx=" + (lng + 0.01);
					option += "&maxy=" + (lat+ 0.01);
					$("#results").html("");
					$.ajax({
						url: reqURL + option,
						dataType: "jsonp",
						success: function(data){
							console.log(data);
							for(var i=0; i<data.photos.length; i++){
								$("#results").append( "<img src='"+ data.photos[i].photo_file_url + "'>");
							}
						}
					});
				} else {
					alert("ダメっぽいです: " + status);
				}
			});
		});
	});