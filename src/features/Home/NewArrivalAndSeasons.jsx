// import LoadingBackground from "../../ui/LoadingBackground";

const liWrap =
  "h-[36rem] w-full max-w-[34rem] overflow-hidden md:h-[38rem] lg:h-[40rem]";

function NewArrivalAndSeasons() {
  return (
    <ul className="mx-4 my-8 flex flex-col items-center justify-center gap-6 md:mx-0 md:my-10 md:w-full md:flex-row">
      <li className={`${liWrap} ml-4 mr-4 md:mr-0`}>
        <div className="flex flex-col items-center">
          <h1 className="bigText mb-1">New Arrival</h1>
          <p className="smallText mb-3">Shop Now</p>
        </div>
        <div className="h-full w-full object-cover">
          {/* {true ? (
            <LoadingBackground />
          ) : ( */}
          <img
            src="https://srsjhagxcstyzprahbst.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-10-28T07%3A52%3A50.473Z"
            className="h-full w-full object-cover"
          />
          {/* )} */}
        </div>
      </li>

      <li className={`${liWrap} ml-4 mr-4 md:ml-0`}>
        <div className="flex flex-col items-center">
          <h1 className="bigText mb-1"> Summer/Winter</h1>
          <p className="smallText mb-3">Shop Now</p>
        </div>
        <img
          src="https://srsjhagxcstyzprahbst.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-10-28T07%3A52%3A50.473Z"
          alt="New Arrival"
          className="h-full w-full object-cover"
        />
      </li>
    </ul>
  );
}

export default NewArrivalAndSeasons;
