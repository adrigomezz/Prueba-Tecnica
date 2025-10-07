import { useState } from "react";

export default function FilterPanel({ filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* div con funcionalidad de botón, esto está orientado para el responsive y 
      sirve para mostar y cerrar los filtros cuando estás en versión móvil, en versión web solamente se mostrará el panel de filtros por defecto*/}

      <div className="sm:hidden mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg bg-brand-700 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition"
        >
          {isOpen ? "Cerrar filtros" : "Mostrar filtros"}
        </button>
      </div>

      {/* Panel lateral de los filtros, aquí se pueden filtar las propiedades por tipo, dependiendo de si se quiere buscar
      pisos, duplex, áticos, etc... */}

      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } sm:block sm:w-64 shrink-0 border border-accent-300 bg-white rounded-xl shadow-card p-5 h-fit`}
      >
        <h3 className="text-lg font-semibold text-brand-700 mb-6">Filtros</h3>

        {/* Tipos de propiedades y sus selecciones */}
        
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo
          </label>
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full rounded-md border border-accent-300 bg-white px-3 py-2 text-sm text-gray-700 focus:ring-1 focus:ring-brand-600"
          >
            <option value="">Todos</option>
            <option value="Piso">Piso</option>
            <option value="Casa">Casa</option>
            <option value="Dúplex">Dúplex</option>
            <option value="Ático">Ático</option>
            <option value="Loft">Loft</option>
            <option value="Estudio">Oficina</option> 
          </select>
        </div>

        {/* Precio mínimo de la propiedades */}

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Precio mínimo
          </label>
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="Ej: 200000"
            className="w-full rounded-md border border-accent-300 bg-accent-100 px-3 py-2 text-sm focus:ring-1 focus:ring-brand-600"
          />
        </div>

        {/* Precio máximo de las propiedades */}

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Precio máximo
          </label>
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="Ej: 1000000"
            className="w-full rounded-md border border-accent-300 bg-accent-100 px-3 py-2 text-sm focus:ring-1 focus:ring-brand-600"
          />
        </div>

        {/* Habitaciones de las propiedades */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mín. habitaciones
          </label>
          <input
            type="number"
            name="minBedrooms"
            value={filters.minBedrooms}
            onChange={handleChange}
            placeholder="Ej: 2"
            className="w-full rounded-md border border-accent-300 bg-accent-100 px-3 py-2 text-sm focus:ring-1 focus:ring-brand-600"
          />
        </div>
      </aside>
    </>
  );
}
