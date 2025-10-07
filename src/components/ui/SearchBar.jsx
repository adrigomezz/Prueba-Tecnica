{/* Archivo que contiene el SearchBar para buscar las propiedades, filtra por las primeras letras */}

export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full sm:w-64">
      <input
        type="text"
        placeholder="Buscar propiedades..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-accent-300 bg-accent-100 px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-600"
      />
    </div>
  );
}
