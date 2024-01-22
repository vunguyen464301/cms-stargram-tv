import { useRef, useEffect, useMemo } from "react";

function useIsMounted(): boolean {
  const isMount = useRef<boolean>(false);

  useEffect(() => {
    isMount.current = true;
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => isMount.current, [isMount.current]);
}

export default useIsMounted;
