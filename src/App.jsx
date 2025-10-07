import { useState, useEffect } from "react";
import Header from "./layout/Header.jsx";
import PropertyList from "./features/properties/PropertyList.jsx";
import PropertyModal from "./features/properties/PropertyModal.jsx";
import FilterPanel from "./components/ui/FilterPanel.jsx";
import propertiesData from "./data/properties.json";

export default function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProperties(propertiesData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, []);

  // Aplicación de filtros
  const filteredProperties = properties.filter((p) => {
    const matchType = filters.type ? p.type === filters.type : true;
    const matchMinPrice = filters.minPrice ? p.price >= Number(filters.minPrice) : true;
    const matchMaxPrice = filters.maxPrice ? p.price <= Number(filters.maxPrice) : true;
    const matchBedrooms = filters.minBedrooms ? p.bedrooms >= Number(filters.minBedrooms) : true;

    return matchType && matchMinPrice && matchMaxPrice && matchBedrooms;
  });

  // Loader para cuando refrescas la página
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-gray-500 text-sm animate-pulse">
          Cargando propiedades...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row gap-6 px-4 py-8">
        <FilterPanel filters={filters} setFilters={setFilters} />

        <main className="flex-1">
          <PropertyList properties={filteredProperties} onSelect={setSelected} />
        </main>
      </div>

      {selected && (
        <PropertyModal property={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
