import { Fragment, useState } from "react";

import Body from "./components/Body/Body";
import Navi from "./components/navigation/Navi";
import Preloader from "./components/preloader/Preloader";

const App = () => {
  const [load, setLoad] = useState(false);

  setTimeout(() => {
    setLoad(true);
  }, 1800);

  return (
    <>
      {load ? (
        <Fragment>
          <Navi />
          <Body />
        </Fragment>
      ) : (
        <Fragment>
          <Preloader />
        </Fragment>
      )}
    </>
  );
}

export default App;
