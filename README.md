# 🥘 Recetas de Cocina 

Esta es una aplicación web para gestionar recetas de cocina, donde los usuarios pueden visualizar diferentes recetas y los administradores pueden agregar, modificar o eliminar recetas.

## 🛠️ Tecnologías Utilizadas

- **React + Vite**: Para la creación de la interfaz de usuario y la lógica de la aplicación.
- **JSON Server**: Actúa como un servidor local para almacenar y gestionar las recetas.
- **CSS**: Para los estilos y el diseño de la aplicación.
- **SweetAlert**: Utilizado para mostrar notificaciones y alertas visuales de manera atractiva (por ejemplo, al agregar, modificar o eliminar una receta).

## 📑 Funcionalidades

- **Visualización de recetas**: En la página de inicio, se muestran las recetas almacenadas en el servidor JSON en formato de cards. Cada card contiene una imagen, título y breve descripción de la receta.
- **Panel de administración**: Permite gestionar las recetas (agregar nuevas, modificarlas o eliminarlas).  
- **Alertas visuales**: Las acciones de agregar, modificar o eliminar recetas están acompañadas de efectos visuales a través de SweetAlert para mejorar la experiencia del usuario.

## ⚙️ Instalación y Ejecución

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/gusgettar/TP-REACT-RECETAS.git
   cd TP-REACT-RECETAS
   
2. **Instalar dependencias**:
   ```bash
   npm install react-bootstrap bootstrap
   npm install react-hook-form
   npm install sweetalert2
   npm install -g json-server@0.17.4
   npm install react-router@6 react-router-dom@6

3. **Levantar el servidor JSON**:
   ```bash
   json-server --watch db.json

4. **Iniciar la aplicacion REACT**:
   ```bash
   npm run dev

5. **Acceder a la aplicación**: La aplicación estará disponible en http://localhost:5173

## 🚀 Próximos Pasos

- **Autenticación de usuarios**: Implementar autenticación para diferenciar entre usuarios regulares y administradores.
- **Mejoras en el diseño**: Ajustar el diseño con CSS y Bootstrap.
- **Buscar recetas**: Añadir una barra de búsqueda para filtrar recetas.

## 📝 Licencia

Este proyecto está bajo la licencia de Rolling Code School. Puedes consultarla en [LICENSE](./LICENSE).
