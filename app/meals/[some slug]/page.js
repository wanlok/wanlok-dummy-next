export default function MealDetailsPage({params}) {
  return (
    <main>
      <h1>Meals Page</h1>
      <p>* * * {params["some slug"]} * * *</p>
    </main>
  );
}
