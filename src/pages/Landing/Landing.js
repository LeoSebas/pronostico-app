import { QueryClientProvider, QueryClient } from "react-query";
import { SearchCityForm } from "../../components/SearchCityForm/SearchCityForm";

const queryCliente = new QueryClient();

export function Landing() {

  return (
    <main className="flex items-center  justify-center h-screen w-screen bg-[url('assets/bg_app.jpg')]">
      <div className="flex items-center bg-opacity-40 bg-white rounded-xl p-10">
        <div className="text-base font-mono py-5 w-[400px]">
          <p className="text-3xl font-bold p-5">Pronóstico App</p>
          <p>Bienvenido a la Pronóstico App!!!</p>
          <p>
            Elija primero el país y luego su ciudad para comenzar a ver el
            Pronóstico.
          </p>
        </div>
        <QueryClientProvider client={queryCliente}>
          <SearchCityForm />
        </QueryClientProvider>
      </div>
    </main>
  );
}
