import { SearchCityForm } from "../../components/SearchCityForm/SearchCityForm";

export function Landing() {
  return (
    <main className="flex items-center  justify-center h-screen w-screen bg-[url('assets/bg_app.jpg')]">
      <div className="flex flex-col items-center bg-opacity-40 bg-white rounded-xl p-10">
        <p className="text-3xl font-bold p-5">Pronóstico App</p>
        <div className="text-base font-mono p-5">
            <p>Bienvenido a la Pronóstico App!!!</p>
            <p>Elija su ciudad para comenzar a ver el Pronóstico.</p>
        </div>
        <SearchCityForm />
      </div>
    </main>
  );
}
    