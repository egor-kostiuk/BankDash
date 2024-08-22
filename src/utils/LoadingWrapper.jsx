import {useEffect, useRef, useState} from "react";
import LoadingBar from "react-top-loading-bar";
import {useLocation} from "react-router-dom";

export const LoadingBarWrapper = ({ children }) => {
  const loadingBarRef = useRef(null);
  const location = useLocation();
  const [previousLocation, setPreviousLocation] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== previousLocation) {
      if (loadingBarRef.current) {
        loadingBarRef.current.continuousStart();
      }

      const handleComplete = () => {
        if (loadingBarRef.current) {
          loadingBarRef.current.complete();
        }
      };

      const loadHandler = () => {
        setTimeout(handleComplete, 500);
      };

      loadHandler();

      setPreviousLocation(location.pathname);

      return () => {
        clearTimeout();
      };
    }
  }, [location, previousLocation]);

  return (
    <>
      <LoadingBar color="#006fff" ref={loadingBarRef} />
      {children}
    </>
  );
};