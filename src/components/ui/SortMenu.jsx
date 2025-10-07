{/* Archivo que contiene un mini menú desplegable para ordenar por precios, superficies y número de habitaciones */}

export default function SortMenu({ sortBy, setSortBy }) {
  return (
    <div className="w-full sm:w-auto">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full sm:w-52 rounded-md border border-accent-300 bg-accent-100 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-brand-600"
      >
        <option value="">Ordenar por...</option>
        <option value="price-asc">Precio: menor a mayor</option>
        <option value="price-desc">Precio: mayor a menor</option>
        <option value="area-desc">Superficie: mayor a menor</option>
        <option value="bedrooms-desc">Habitaciones: más a menos</option>
      </select>
    </div>
  );
}
