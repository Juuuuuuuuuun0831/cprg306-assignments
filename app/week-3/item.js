export default function Item ({ name, quantity, category }) { 
  return (
    <li className="flex justify-between items-center p-4 border-b border-gray-300">
      <span className="font-semibold">{name}</span>
      <span className="text-gray-500">{quantity}</span>
      <span className="text-sm text-gray-400">{category}</span>
    </li>
  );
};
