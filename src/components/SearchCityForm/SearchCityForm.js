export function SearchCityForm() {
  return (
    <main className="flex flex-col w-[400px]">
      <label htmlFor="__city_input__">Ciudad:</label>
      <input
        className="rounded-md text-lg p-[10px] w-full"
        id="__city_input__"
        placeholder="Ingrese el nombre de la ciudad aquí"
      />
      <button className="rounded-lg text-lg bg-blue-600 my-5">Ver Pronóstico</button>
    </main>
  );
}
