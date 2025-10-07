{/* Archivo que contiene el diseño de las cards con sus propiedades como las fuentes, bordes, tamaño, etc... */}

export default function PropertyCard({ property, onClick }) {
  return (
    <div
      onClick={() => onClick(property)}
      className="cursor-pointer rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition"
    >
      <img
        src={property.images[0]}
        alt={property.title}
        className="h-40 w-full rounded-md object-cover"
      />
      <h2 className="mt-3 text-lg font-semibold">{property.title}</h2>
      <p className="text-sm text-gray-600">{property.location}</p>
      <p className="mt-2 text-brand-600 font-medium">
        {property.price.toLocaleString("es-ES")} {property.currency}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        {property.bedrooms} hab • {property.bathrooms} baños • {property.area} m²
      </p>
    </div>
  );
}
