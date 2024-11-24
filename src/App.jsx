import { Discover } from "./components/Discover-section";
import { ExploreSection } from "./components/Explore-section";
import {Herosection} from "./components/Hero-section";

export const App = () => {
  return (
    <>
      <Herosection />
      <Discover/>
      <ExploreSection/>
    </>
  );
};
