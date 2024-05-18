export default function Stats({ items }) {
  const numItems = items.length;
  if (!numItems)
    return (
      <footer className="stats">
        Start adding some itmes to your packing list⛱️
      </footer>
    );
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      {packedPercentage === 100
        ? `You got everything. You are ready for your trip 🎆🚀`
        : `You have ${numItems} items in your list. You have packed${" "}
      ${packedItems}. (${packedPercentage}%)`}
    </footer>
  );
}
