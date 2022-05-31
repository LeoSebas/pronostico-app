import { useCallback, useEffect, useState } from "react";
import { getCountries } from "../services/countries";

export function useCountries() {
    const [countries, setCountries] = useState([])
    const _getCountries = useCallback(
     async () => {
        try {
            const { data } = await getCountries();
            console.log(data);
            setCountries(data)
        } catch (error) {
            console.log(error)
        }   
      },
      [],
    )
    useEffect(() => {
        _getCountries()
        return () => {
        };
    }, [_getCountries]);
  return [countries];
}
