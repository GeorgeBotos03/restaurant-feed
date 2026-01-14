import { useParams } from "react-router-dom";

export default function RestaurantDetailsPage() {
  const { id } = useParams();

  return (
    <section>
      <h1>Restaurant Details</h1>
      <p>
        Opened restaurant id: <strong>{id}</strong>
      </p>
    </section>
  );
}
