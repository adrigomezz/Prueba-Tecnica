{/* 
  Archivo que muestra los detalles completos de una propiedad en un modal con diseño responsive.
*/}

export default function PropertyModal({ property, onClose }) {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-5xl overflow-hidden">
        {/* Botón para cerrar el modal de la propiedad que se está viendo */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 text-lg"
        >
          ✕
        </button>

        {/* Imagen de la propiedad que se está viendo en el modal */}
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-72 w-full object-cover border-b border-accent-300"
        />

        {/* Contenido de le propiedad dividido en dos columnas */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna izquierda (detalles principales como el nº de habitaciones, baños y m2) */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {property.title}
            </h2>
            <p className="text-gray-600 mb-4">{property.location}</p>

            <p className="text-3xl font-bold text-brand-600 mb-6">
              {property.price.toLocaleString("es-ES")} €
            </p>

            <ul className="text-sm text-gray-600 space-y-1">
              <li> {property.bedrooms} habitaciones</li>
              <li> {property.bathrooms} baños</li>
              <li> {property.area} m²</li>
              <li> Tipo: {property.type}</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {property.features.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs text-gray-700"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Columna derecha (descripción de la propiedad) */}
          <div className="text-sm text-gray-700 leading-relaxed">
            <h3 className="font-semibold text-gray-900 mb-2">Descripción</h3>
            <p className="whitespace-pre-line">{property.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {property.details &&
                property.details.map((d) => (
                  <span
                    key={d}
                    className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600"
                  >
                    {d}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
