import { useState } from "react";
import { useNavigate } from "react-router";
import { useCountries } from "../../hooks/useCountries";
import { getCities } from "../../services/cities";

export function SearchCityForm() {
  /// Ciudad a la que se le buscara el pronóstico.
  const [city, setCity] = useState({ name: "", country: "" });

  /// State que controla el input del país
  const [country, setCountry] = useState("");

  /// State que contiente las ciudades encontradas.
  const [citiesFound, setCitiesFound] = useState([]);

  /// navigate

  const navigate = useNavigate()

  const [suggestedCountries, setSuggestedCountries] = useState([]);
  const [countries] = useCountries();

  const [citySelected, setCitySelected] = useState();

  function filterCountriesList(namePrefix) {
    let countriesFiltered = countries.filter((elemento) => {
      return (
        elemento.translations.spa.common
          .toLowerCase()
          .indexOf(namePrefix.toLowerCase()) > -1
      );
    });

    countriesFiltered.sort(
      (prev, next) =>
        prev.translations.spa.common -
        country -
        (next.translations.spa.common - country)
    );
    countriesFiltered.slice(0, 5);
    setSuggestedCountries(countriesFiltered);
  }
  /// handle para la selección de un país en el listado de sugerencias.
  function handleSetCountryClick(name, code) {
    setCountry(name);
    setCity({ ...city, country: code });
  }

  /// handle para el input del país ingresado.
  function handleOnChangeCountryInput(event) {
    setCountry(event.target.value);

    // Si se modifica el país se resetea el valor en [city].
    setCity({ ...city, country: "" });

    filterCountriesList(event.target.value);
  }

  /// async function para la búsqueda de las ciudades.
  async function findCities() {
    try {
      const result = await getCities(city.name, city.country);
      console.log(result);
      setCitiesFound(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  /// handle para buscar las ciudades encontradas
  function handleClickFindCities() {
    findCities();
  }

  /// handle para seleccionar la ciudad
  function handleOnChangeSelectedCity(event) {
    if (event.target.checked) {
      setCitySelected(citiesFound[event.target.id]);
    }
  }

  ///handle para ir a la pagina de pronostico
  function handleClickVerPronostico() {
    
    navigate(`/city=${citySelected.name}`)
  }

  return (
    <main className="flex flex-col w-[400px]">
      <label htmlFor="__country_input__">País</label>
      <input
        className="rounded-md text-lg p-[10px] w-full"
        id="__country_input__"
        placeholder="Ingrese el país"
        onChange={handleOnChangeCountryInput}
        value={country}
      ></input>
      <div
        className={
          (suggestedCountries && !city.country && country
            ? "fixed"
            : "hidden") + " mt-[75px] w-[400px] bg-white"
        }
      >
        {suggestedCountries.map(({ cca2, translations }, i) => {
          return (
            <div
              onClick={() =>
                handleSetCountryClick(translations.spa.common, cca2)
              }
              className="bg-white relative text-lg p-[10px] hover:cursor-pointer hover:bg-blue-400"
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
      <button
        className="rounded-xl text-lg bg-blue-600 my-5 p-2"
        onClick={handleClickFindCities}
      >
        Buscar ciudad
      </button>
      <p
        className={
          (citiesFound ? "" : "hidden") + " text-base font-mono py-5 w-[400px]"
        }
      >
        Seleccione la ciudad entre las listadas a continuación:
      </p>
      <div>
        <fieldset className={(citiesFound ? "" : "hidden") + " rounded-lg"}>
          {citiesFound ? (
            citiesFound.map(({ name, local_names, state }, i) => {
              return (
                <div
                  key={i}
                  className="bg-white text-lg p-[10px] hover:bg-blue-400 w-full"
                >
                  <input
                    type="radio"
                    name="ciudad"
                    id={i}
                    value={`${local_names?.es ?? name}${state ? ", " : ""}${
                      state ?? ""
                    }`}
                    onChange={handleOnChangeSelectedCity}
                  />
                  <label htmlFor={i} className="ml-2 hover:cursor-pointer">
                    {`${local_names?.es ?? name}${state ? ", " : ""}${
                      state ?? ""
                    }`}
                  </label>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
          <button
            className="rounded-xl text-lg bg-blue-600 my-5 p-2 w-full disabled:bg-gray-400"
            onClick={handleClickVerPronostico}
            disabled={!citySelected}
          >
            Ver pronóstico
          </button>
        </fieldset>
      </div>
    </main>
  );
}
