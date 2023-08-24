import ColorProvider from "./context/ColorProvider";
import { Navigation } from "./routes/Navigation";

const App = () => {
  return (
    <>
      <ColorProvider>
        <Navigation />
      </ColorProvider>
    </>
  );
};

export default App;
