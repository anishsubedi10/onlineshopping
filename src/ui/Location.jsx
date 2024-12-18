import { useState } from "react";
import { getAddress } from "../services/location";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function Location() {
  const [add, setAdd] = useState("");
  async function address() {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    //payLoad for the fullfill state
    // return { position, address };
    setAdd(address);
  }
  return (
    <div>
      <button onClick={address}>getAddress</button>
      {add && <h1>{add}</h1>}
    </div>
  );
}

export default Location;
