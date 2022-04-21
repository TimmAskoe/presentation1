import { resturants } from "../defintions";
import { ResturantRow } from "./resturantRow";

export function NearbyResturants() {
  function createListOfResturants() {
    return resturants.map((resturant) => (
      <ResturantRow
        name={resturant.name}
        distance={resturant.distance}
        rating={resturant.rating}
        address={resturant.address}
        openingHours={resturant.openingHours}
        tasteRating={resturant.tasteRating}
        textureRating={resturant.textureRating}
        visualRating={resturant.visualRating}
      />
    ));
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          width: "100%",
          marginBottom: "24px",
        }}
      >
        <div>RESTURANT</div>
        <div>DISTANCE</div>
        <div>AVG. RATING</div>
        <div>LEARN MORE</div>
      </div>
      {createListOfResturants()}
    </div>
  );
}
