{/* 
  Archivo componente que muestra la cabecera del CRM, incluye el título de Listado de Propiedades
  y a la derecha un botón para añadir una propiedad aunqque sin funcionalidad.
*/}

export default function Header() {
  return (
    <header className="border-b border-accent-300 bg-white shadow-soft sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* Título principal */}
        <h1 className="text-2xl font-bold tracking-tight text-brand-700">
          Propiedades disponibles
        </h1>

        {/* Botón “Añadir nueva propiedad” */}
        <button className="rounded-lg bg-brand-700 px-5 py-2 text-sm font-medium text-white hover:bg-brand-600 shadow-sm transition-all duration-150">
          + Añadir nueva propiedad
        </button>
      </div>
    </header>
  );
}
