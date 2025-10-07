🏡 Property List — Prueba Técnica Frontend (Lion Capital Group)

Proyecto realizado como prueba técnica para Lion Capital Group, desarrollando un CRM con listado, búsqueda, filtros, ordenación y modal de detalles.


🚀 Tecnologías utilizadas:

- React 18 — Librería principal para la construcción de la interfaz.
- Vite — Entorno de desarrollo rápido y moderno.
- Tailwindcss — Framework de estilos utilitario para un diseño responsive y consistente.
- PostCSS + Autoprefixer — Procesamiento de estilos.
- JavaScript (ES6+) — Lógica de filtrado, ordenación y renderizado dinámico.
  

🧩 Estructura del proyecto:

<img width="833" height="462" alt="image" src="https://github.com/user-attachments/assets/23d10cb6-d823-4fac-8d03-fd407d3541db" />


🎨 Diseño y estilo:

El diseño sigue un poco la referencia visual del Figma proporcionado:

- Fondo principal: bg-accent-100 (gris claro elegante)
- Texto y títulos: text-brand-700 (azul oscuro corporativo)
- Botones: bg-brand-600 con hover bg-brand-700
- Cards y modales con sombras suaves y bordes redondeados (rounded-xl shadow-card)


📱Responsive mediante grid adaptable:

- 1 columna (móvil)
- 2 columnas (tablet)
- 3 columnas (desktop)


🔍 Funcionalidades implementadas:

- Listado de propiedades
- Renderizado dinámico desde properties.json.
- Cada propiedad muestra título, ubicación, precio, superficie y características.
- Búsqueda en tiempo real
- Filtrado por título o ubicación mediante SearchBar.
- Ordenación dinámica
- Ordena por precio, área o número de habitaciones mediante SortMenu.
- Filtros adicionales
- Filtrado por tipo, rango de precios y número mínimo de habitaciones (FilterPanel).
- Modal de detalle
- Muestra información completa de la propiedad seleccionada (PropertyModal).
- Estados y control de carga
- Mensajes de “Cargando propiedades…” y “No se han encontrado propiedades con los resultados que buscas”.
- Diseño responsive
- Adaptación completa a móvil, tablet y escritorio usando utilidades Tailwind.

 

⚙️ Instalación y ejecución: 

Clonar el repositorio y ejecutar:

- git clone https://github.com/TU_USUARIO/property-list.git
- cd property-list
- npm install
- npm run dev

- Luego a continuación abre http://localhost:5173 para ver la aplicación.



🧠 Decisiones técnicas

- Los datos se mantienen en un JSON, concretamente en properties.json para simular una API local.
- Se han creado componentes que pueden ser reutilizables, especialmente para UI.
- Se ha implementado un diseño escalable, fácilmente ampliable para CRUD real con backend.



🧾 Desafíos y soluciones que he encontrado

El único problema gordo que me he encontrado ha sido al inicio de la creación y en la instalación de tailwindcss. Cuando hago npm install -D tailwindcss postcss autoprefixer me descarga la versión de tailwind 4.1.14 que se puede comprobar en el package.json, lo que provoca que al ejecutar npx tailwindcss init -p no funcione porque solo funciona con versiones anteriores a la 4.0.0 y me da el error: 

"npm error could not determine executable to run npm error A complete log of this run can be found in: C:\Users\adrix\AppData\Local\npm-cache\_logs\2025-10-07T17_08_05_013Z-debug-0.log"

Esto es un error que he tenido que solucionar a través de videos de YouTube y por lo que he podido encontrar principalemente pasa porque tailwindcss 4 es un versión nueva que no es compatible con ciertos comandos. Entonces lo que he hecho ha sido ejecutar el comando npm i -D tailwindcss@3 post css autoprefixer que me descarga la versión de tailwind ^3.4.18 y luego ejecuto de vuelta el comando npx tailwindcss init -p y ahora así me funciona correctamente, mostrándome en la terminal: 

"Created Tailwind CSS config file: tailwind.config.js"
Created PostCSS config file: postcss.config.js"

De forma que toda la instalación está correcta aunque sea un poco tediosa pero es necesaria para que luego los estilos y demás vayan bien. Y así, de esa forma se crean configurados por defecto pero correctamente los archivos postcss.config.js y el tailwind.config.js en luagr de añadirlos manualmente, lo cuál puede dar problemas.




🚧 Posibles mejoras en caso de tener más tiempo

- Implementar funcionalidad para añadir propiedades desde el botón “añadir propiedad”.
- Ya que se trabaja con un CRM se podría integrar un contexto global o Redux Toolkit para manejar filtros y favoritos.
- Estaría muy bien conectar con una API real para cargar de forma dinámica los datos.
- Mejorar la gestión de imágenes, ya que las URLs de las imagenes en el archivo JSON properties.json devuelven una imagen distinta en cada carga, pero no incluyen extensión (.jpg, .png) y además no permiten hotlink directo cuando se usa en entornos locales con Vite.
