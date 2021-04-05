const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetsList: [],
			planetsDetailsList: [],
			vehicleList: []
		},
		actions: {
			fetchPeople: async () => {
				const url = "https://swapi.dev/api/people/";
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(url, config);
				const json = await response.json();
				console.log(">>Data", json.results);
				setStore({ peopleList: json.results });
			},
			fetchPlanets: async () => {
				const store = getStore();
				const url = "https://swapi.dev/api/planets/";
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(url, config);
				const json = await response.json();
				setStore({ planetsList: json.results });

				console.log(">>Planets", json.results);
			},
			// fetchDetailsPlanets: async () => {
			// 	await getActions().fetchPlanets();
			// 	const store = getStore();
			// 	const config = {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-type": "application/json"
			// 		}
			// 	};

			// 	store.planetsList.map(async (item, index) => {
			// 		const response = await fetch(item.url, config);
			// 		const json = await response.json();
			// 		console.log(">>planetsdetails", json.result.properties);
			// 		await setStore({ planetsDetailsList: [...store.planetsDetailsList, json.result.properties] });
			// 	});
			// },
			fetchVehicles: async () => {
				const url = "https://swapi.dev/api/vehicles/";
				const config = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(url, config);
				const json = await response.json();
				console.log(">>Data", json.results);
				setStore({ vehicleList: json.results });
			},
			setFavorites: async name => {
				const store = getStore();
				// Los ... esparce lo que tengo en el arreglo y genera un arregla nuevo. con esto nunca voy a perder mis favoritos antiguos.
				function arrayRemove(arr, value) {
					return arr.filter(function(ele) {
						return ele != value;
					});
				}

				if (store.favorites.includes(name)) {
					var result = arrayRemove(store.favorites, name);
					console.log(result);
					setStore({ favorites: result });
					console.log("aaa");
				} else {
					setStore({ favorites: [...store.favorites, name] });
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
