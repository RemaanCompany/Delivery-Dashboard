import Layout from "./layouts/Layout";
import PagesContext from "./context/PagesContext";
import Themes from "./context/Themes";

export default function App() {
  return (
    <Themes>
      <PagesContext>
        <Layout />
      </PagesContext>
    </Themes>
  );
}
