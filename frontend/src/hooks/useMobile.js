import { useState, useEffect } from "react";

export function useMobile() {
  const [esMobil, setEsMobil] = useState(null);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 576px)");

    mql.addListener(revisarSiEsMobil);

    function revisarSiEsMobil() {
      if (mql.matches) {
        setEsMobil(false);
      } else {
        setEsMobil(true);
      }
    }

    revisarSiEsMobil();

    return () => mql.removeListener(revisarSiEsMobil);
  }, []);

  return esMobil;
}
