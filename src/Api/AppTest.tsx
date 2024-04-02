import Card from "./Card";
import { useQuery } from "@tanstack/react-query";


const AppTest = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:5125/api/v1/country").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {Array.isArray(data) &&
        data.map((item) => {
          return (
            <div key={item.id}>              
              <Card name={item.name} image={item.image} price={item.price} />
            </div>
          );
        })}
    </div>
  );
};

export default AppTest;
