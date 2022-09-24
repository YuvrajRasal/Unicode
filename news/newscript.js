// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '83f3c853afmsh9f31650c1456db4p1d6c12jsn2d69b3378ad8',
// 		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
// 	}
// };

// fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api').then((data)=>{
//     return data.json();
// })
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));

   const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83f3c853afmsh9f31650c1456db4p1d6c12jsn2d69b3378ad8',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options).then((data)=>{
        return data.json();
     }).then((objectData)=>{
        console.log(objectData);
        
    let tableData="";
    objectData.countries_stat.map((values)=>{
       return tableData+= `  <tr>
        <td>${values.country_name}</td>
         <td>${values.active_cases}</td>
         <td>${values.deaths}</td>
        <td>${values.new_cases}</td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
})
// active_cases
// : 
// "1,196,538"
// cases
// : 
// "82,649,779"
// country_name
// : 
// "USA"
// deaths
// : 
// "1,018,316"
// deaths_per_1m_population
// : 
// "3,044"
// new_cases
// : 
// "0"
// new_deaths
// : 
// "0"
// region
// : 
// ""
// serious_critical
// : 
// "1,465"
// tests_per_1m_population
// : 
// "2,990,303"
// total_cases_per_1m_population
// : 
// "247,080"
// total_recovered
// : 
// "80,434,925"
// total_tests
// : 
// "1,000,275,726
// active_cases
// : 
// "41,198,606"
// deaths_per_1m_population
// : 
// "800.9"
// new_cases
// : 
// "204,268"
// new_deaths
// : 
// "630"
// serious_critical
// : 
// "42,510"
// statistic_taken_at
// : 
// "2022-04-24 11:18:01"
// total_cases
// : 
// "509,268,964"
// total_cases_per_1m_population
// : 
// "65,334"
// total_deaths
// : 
// "6,242,509"
// total_recovered
// : 
// "461,827,849"