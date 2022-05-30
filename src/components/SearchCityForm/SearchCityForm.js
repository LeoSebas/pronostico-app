import { useState } from "react";
import { getCountries } from "../../services/countries";

export function SearchCityForm() {
  const [city, setCity] = useState({ name: "", country: "" });
  const [country, setCountry] = useState("");
  const [suggestedCountries, setSuggestedCountries] = useState([]);

  async function getCountriesList(namePrefix) {
    if (namePrefix.length === 2) {
      const { data } = await getCountries(namePrefix);
      console.log(data)
      data ? setSuggestedCountries(data) : setSuggestedCountries([]);
    } else if (namePrefix.length > 2) {
      const countriesList = suggestedCountries.filter((elemento) => {
        return elemento.translations.spa.common.toLowerCase().indexOf(country.toLowerCase()) > -1
      });
      setSuggestedCountries(countriesList)
    } else {
      setSuggestedCountries([])
    }
  }
  function handleSetCountryClick(name, code) {
    setCountry(name);
    setCity({ ...city, country: code });
  }

  return (
    <main className="flex flex-col w-[400px]">
      <label htmlFor="__country_input__">País</label>
      <input
        className="rounded-md text-lg p-[10px] w-full"
        id="__country_input__"
        placeholder="Ingrese el país"
        onChange={(e) => {
          setCity({ ...city, country: "" });
          setCountry(e.target.value);
          getCountriesList(country);
        }}
        value={country}
      ></input>
      <div
        className={
          (suggestedCountries && !city.country ? "fixed" : "hidden") +
          " mt-[75px] w-[400px] bg-white"
        }
      >
        {suggestedCountries.map(({ cca2 , translations } , i) => {
          return (
            <div
              onClick={() => handleSetCountryClick(translations.spa.common, cca2)}
              className="bg-white relative text-lg p-[10px]"
              key={i}
            >{`${translations.spa.common}, ${cca2}`}</div>
          );
        })}
      </div>

      <label htmlFor="__city_input__">Ciudad:</label>
      <input
        disabled={city.country === ""}
        className="rounded-md text-lg p-[10px] w-full"
        id="__city_input__"
        placeholder="Ingrese el nombre de la ciudad aquí"
        onChange={(e) => {
          setCity({ ...city, name: e.target.value });
        }}
        value={city.name}
      />
      {}
      <button className="rounded-lg text-lg bg-blue-600 my-5">
        Ver Pronóstico
      </button>
    </main>
  );
}
