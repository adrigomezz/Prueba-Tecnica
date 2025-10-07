{/* 
  Archivo que Muestra el listado principal de propiedades con búsqueda, ordenación y selección.
  Renderiza las propiedades en formato tabla con estilos Tailwind.

*/}

import { useState } from "react";
import SearchBar from "../../components/ui/SearchBar.jsx";
import SortMenu from "../../components/ui/SortMenu.jsx";

export default function PropertyList({ properties, onSelect }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Filtrado por texto
  let filtered = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  // Ordenación dinámica en el filtro
  if (sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === "area-desc") filtered.sort((a, b) => b.area - a.area);
  else if (sortBy === "bedrooms-desc") filtered.sort((a, b) => b.bedrooms - a.bedrooms);

  return (
    <div className="rounded-xl border border-accent-300 bg-white shadow-card overflow-hidden w-full">
      {/* SearchBar junto con el menú de ordenación */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 border-b border-accent-300 bg-accent-100">
        <SearchBar value={search} onChange={setSearch} />
        <SortMenu sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* Cabecera tipo tabla como en el ejemplo de Figma */}
      <div className="grid grid-cols-[100px_1fr_1fr_130px_120px_100px] items-center px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-accent-300 bg-accent-200">
        <span>Imagen</span>
        <span>Título</span>
        <span>Ubicación</span>
        <span>Precio</span>
        <span>Habitaciones</span>
        <span>Superficie</span>
      </div>

      {/* Filas de las propiedades */}
      {filtered.length === 0 ? (
        <div className="py-10 text-center text-sm text-gray-500">
           No se han encontrado propiedades con los criterios que buscas.
        </div>
      ) : (
        <div className="divide-y divide-accent-300">
          {filtered.map((property) => (
            <div
              key={property.id}
              onClick={() => onSelect(property)}
              className="grid grid-cols-[100px_1fr_1fr_130px_120px_100px] items-center gap-4 px-6 py-4 hover:bg-accent-100 cursor-pointer transition"
            >
              <img
                src={property.images[0]}
                alt={property.title}
                className="h-14 w-20 object-cover rounded-md border border-accent-300"
              />
              <span className="font-medium text-gray-800 truncate">{property.title}</span>
              <span className="text-gray-600 truncate">{property.location}</span>
              <span className="font-semibold text-gray-900">
                {property.price.toLocaleString("es-ES")} €
              </span>
              <span className="text-gray-600">{property.bedrooms}</span>
              <span className="text-gray-600">{property.area} m²</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
