import Characters from "./blocks/Characters";
import Hero from "./blocks/Hero";
import Intro from "./blocks/Intro";
import Media from "./blocks/Media";
import Story from "./blocks/Story";
import Trailer from "./blocks/Trailer";

const App = () => {
  return (
    <main>
      <Intro />
      <Hero />
      <Story  />
      <Characters />
      <Media />
      <Trailer/>
    </main>
  );
};

export default App;
