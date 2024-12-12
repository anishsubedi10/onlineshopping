import CategoryAll from "../../category/CategoryAll";
import { useNewArrival } from "../../category/useNewArrival";

function NewArrival() {
  const { isLoading, data, error } = useNewArrival();
  return (
    <CategoryAll data={data} isLoading={isLoading} category={"New Arrival"} />
  );
}

export default NewArrival;
