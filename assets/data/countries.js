const countriesRaw = [{
    "id": "ARE",
    "iso2Code": "AE",
    "name": "United Arab Emirates",
    "region": {"id": "MEA", "iso2code": "ZQ", "value": "Middle East & North Africa"},
    "adminregion": {"id": "", "iso2code": "", "value": ""},
    "incomeLevel": {"id": "HIC", "iso2code": "XD", "value": "High income"},
    "lendingType": {"id": "LNX", "iso2code": "XX", "value": "Not classified"},
    "capitalCity": "Abu Dhabi",
    "longitude": "54.3705",
    "latitude": "24.4764"
}, {
    "id": "CHN",
    "iso2Code": "CN",
    "name": "China",
    "region": {"id": "EAS", "iso2code": "Z4", "value": "East Asia & Pacific"},
    "adminregion": {"id": "EAP", "iso2code": "4E", "value": "East Asia & Pacific (excluding high income)"},
    "incomeLevel": {"id": "UMC", "iso2code": "XT", "value": "Upper middle income"},
    "lendingType": {"id": "IBD", "iso2code": "XF", "value": "IBRD"},
    "capitalCity": "Beijing",
    "longitude": "116.286",
    "latitude": "40.0495"
}, {
    "id": "CZE",
    "iso2Code": "CZ",
    "name": "Czechia",
    "region": {"id": "ECS", "iso2code": "Z7", "value": "Europe & Central Asia"},
    "adminregion": {"id": "", "iso2code": "", "value": ""},
    "incomeLevel": {"id": "HIC", "iso2code": "XD", "value": "High income"},
    "lendingType": {"id": "LNX", "iso2code": "XX", "value": "Not classified"},
    "capitalCity": "Prague",
    "longitude": "14.4205",
    "latitude": "50.0878"
}, {
    "id": "DEU",
    "iso2Code": "DE",
    "name": "Germany",
    "region": {"id": "ECS", "iso2code": "Z7", "value": "Europe & Central Asia"},
    "adminregion": {"id": "", "iso2code": "", "value": ""},
    "incomeLevel": {"id": "HIC", "iso2code": "XD", "value": "High income"},
    "lendingType": {"id": "LNX", "iso2code": "XX", "value": "Not classified"},
    "capitalCity": "Berlin",
    "longitude": "13.4115",
    "latitude": "52.5235"
}, {
    "id": "FRA",
    "iso2Code": "FR",
    "name": "France",
    "region": {"id": "ECS", "iso2code": "Z7", "value": "Europe & Central Asia"},
    "adminregion": {"id": "", "iso2code": "", "value": ""},
    "incomeLevel": {"id": "HIC", "iso2code": "XD", "value": "High income"},
    "lendingType": {"id": "LNX", "iso2code": "XX", "value": "Not classified"},
    "capitalCity": "Paris",
    "longitude": "2.35097",
    "latitude": "48.8566"
}, {
    "id": "GBR",
    "iso2Code": "GB",
    "name": "United Kingdom",
    "region": {"id": "ECS", "iso2code": "Z7", "value": "Europe & Central Asia"},
    "adminregion": {"id": "", "iso2code": "", "value": ""},
    "incomeLevel": {"id": "HIC", "iso2code": "XD", "value": "High income"},
    "lendingType": {"id": "LNX", "iso2code": "XX", "value": "Not classified"},
    "capitalCity": "London",
    "longitude": "-0.126236",
    "latitude": "51.5002"
}, {
    "id": "IND",
    "iso2Code": "IN",
    "name": "India",
    "region": {"id": "SAS", "iso2code": "8S", "value": "South Asia"},
    "adminregion": {"id": "SAS", "iso2code": "8S", "value": "South Asia"},
    "incomeLevel": {"id": "LMC", "iso2code": "XN", "value": "Lower middle income"},
    "lendingType": {"id": "IBD", "iso2code": "XF", "value": "IBRD"},
    "capitalCity": "New Delhi",
    "longitude": "77.225",
    "latitude": "28.6353"
}, {
    "id": "ITA",
    "iso2Code": "IT",
    "name": "Italy",
    "region": {"id": "ECS", "iso2code": "Z7", "value": "Europe & Central Asia"},
    "adminregion": {"id": "", "iso2code": "", "value": ""},
    "incomeLevel": {"id": "HIC", "iso2code": "XD", "value": "High income"},
    "lendingType": {"id": "LNX", "iso2code": "XX", "value": "Not classified"},
    "capitalCity": "Rome",
    "longitude": "12.4823",
    "latitude": "41.8955"
}, {
    "id": "USA",
    "iso2Code": "US",
    "name": "United States",
    "region": {"id": "NAC", "iso2code": "XU", "value": "North America"},
    "adminregion": {"id": "", "iso2code": "", "value": ""},
    "incomeLevel": {"id": "HIC", "iso2code": "XD", "value": "High income"},
    "lendingType": {"id": "LNX", "iso2code": "XX", "value": "Not classified"},
    "capitalCity": "Washington D.C.",
    "longitude": "-77.032",
    "latitude": "38.8895"
}, {
    "id": "UZB",
    "iso2Code": "UZ",
    "name": "Uzbekistan",
    "region": {"id": "ECS", "iso2code": "Z7", "value": "Europe & Central Asia"},
    "adminregion": {"id": "ECA", "iso2code": "7E", "value": "Europe & Central Asia (excluding high income)"},
    "incomeLevel": {"id": "LMC", "iso2code": "XN", "value": "Lower middle income"},
    "lendingType": {"id": "IDB", "iso2code": "XH", "value": "Blend"},
    "capitalCity": "Tashkent",
    "longitude": "69.269",
    "latitude": "41.3052"
}, {
    "id": "VNM",
    "iso2Code": "VN",
    "name": "Vietnam",
    "region": {"id": "EAS", "iso2code": "Z4", "value": "East Asia & Pacific"},
    "adminregion": {"id": "EAP", "iso2code": "4E", "value": "East Asia & Pacific (excluding high income)"},
    "incomeLevel": {"id": "LMC", "iso2code": "XN", "value": "Lower middle income"},
    "lendingType": {"id": "IBD", "iso2code": "XF", "value": "IBRD"},
    "capitalCity": "Hanoi",
    "longitude": "105.825",
    "latitude": "21.0069"
}, {
    "id": "AUT", "iso2Code": "AT", "name": "Austria", "region": {
        "id": "ECS", "iso2code": "Z7", "value": "Europe & Central Asia"
    }, "adminregion": {
        "id": "", "iso2code": "", "value": ""
    }, "incomeLevel": {
        "id": "HIC", "iso2code": "XD", "value": "High income"
    }, "lendingType": {
        "id": "LNX", "iso2code": "XX", "value": "Not classified"
    }, "capitalCity": "Vienna", "longitude": "16.3798", "latitude": "48.2201"
}];

let names = [];

data.countries = countriesRaw.map(country => {
    const {name, latitude, longitude, iso2Code} = country;
    names.push(iso2Code)
    return {name, latitude, longitude, id: iso2Code};
});

alert(names)