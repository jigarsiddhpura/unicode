const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4936cc6279mshc29d7b253abbb5fp15dae5jsn93410114fbfe',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	// .then(Object => Object)
	.then(Object => appendData(Object))
	// .then(response => console.log(response))
	.catch(err => console.error(err));


function appendData(Object){
	let list = Object["countries_stat"];
	// let container = document.getElementById("container");

	let html = `<table border='1' >
		<thead>
			<tr>
				<th>Country</th>
				<th>Cases</th>
				<th>Deaths</th>
				<th>Total Recovered</th>
				<th>Active Cases</th>
			</th>
		</thead>
		<tbody>`;
		
	for(var i=0; i<list.length ;i++){
		html += `<tr>`;

		var country_name = list[i]["country_name"];
		html += `<td> ${country_name} </td> `;

		var cases = list[i]["cases"];
		html += `<td> ${cases} </td>`;

		var deaths = list[i]["deaths"];
		html += `<td> ${deaths} </td>`;

		var total_recovered = list[i]["total_recovered"];
		html += `<td> ${total_recovered} </td>`;

		var active_cases = list[i]["active_cases"];
		html += `<td> ${active_cases} </td>`;

		html += `</tr>`;

	}
	html += ` </tbody> </table >`;
	document.getElementById("covid-data").innerHTML = html;
}
appendData(Object);
