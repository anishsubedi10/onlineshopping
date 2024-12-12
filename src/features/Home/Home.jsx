import Ad from "./Ad";
import NewArrivalAndSeasons from "./NewArrivalAndSeasons";
import ShopByCate from "./shopByCate";
import Trending from "./Trending";
// import Unsplash from "../tempdata/unsplash";

function Home() {
  return (
    <>
      <Ad />
      <NewArrivalAndSeasons />
      {/* <Unsplash /> */}
      <ShopByCate />
      <Trending />
      {/* <h1>unComment trending from app.js</h1> */}
    </>
  );
}

export default Home;
