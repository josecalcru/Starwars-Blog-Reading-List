const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: []
		},
		actions: {
			fetchPeople: async () => {
				const url = "https://www.swapi.tech/api/people/";
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
				const url = "https://www.swapi.tech/api/planets/";
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
			fetchStarships: async () => {
				const url = "https://www.swapi.tech/api/starships/";
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
			setFavorites: async name => {
				const store = getStore();
				// Los ... esparce lo que tengo en el arreglo y genera un arregla nuevo. con esto nunca voy a perder mis favoritos antiguos.
				setStore({ favorites: [...store.favorites, name] });
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
