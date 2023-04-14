let parentElement = document.getElementById('parent')


	$.ajax({
		url: "https://data.cityofnewyork.us/resource/enfh-gkve.json",
		type: "GET",
		data: {
		  "$limit" : 5000,
		  "$$app_token" : "3LPgYEc949FFLKpD5dZJsAz5o"
		}
	}).done(function(data) {
		for(let i =0; i < data.length; i++){

			let newDiv = document.createElement('div')
			newDiv.style.width = 10 * data[i].acres + 'px'
			newDiv.innerHTML =` 
			<a href=${data[i].url} target="blank"><div>${data[i].signname}</div></a>
			`
			parentElement.append(newDiv)
		}
	});
