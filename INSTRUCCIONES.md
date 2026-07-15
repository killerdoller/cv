# Guía de Despliegue en GitHub Pages

Para publicar tu hoja de vida / portafolio en internet usando GitHub Pages, sigue estos sencillos pasos:

## Paso 1: Crear un Repositorio en GitHub
1. Abre tu navegador e inicia sesión en [GitHub](https://github.com).
2. Haz clic en el botón **New** (Nuevo) para crear un repositorio.
3. Configura el repositorio:
   * **Repository name**: Tienes dos opciones:
     * **Opción A (Recomendada - URL Principal)**: Nómbralo exactamente `tu-usuario.github.io` (reemplazando `tu-usuario` por tu nombre de usuario real en GitHub). Esto hará que tu portafolio sea accesible directamente desde `https://tu-usuario.github.io/`.
     * **Opción B**: Nómbralo algo como `portafolio` u `hoja-de-vida`. Tu página será accesible desde `https://tu-usuario.github.io/portafolio/`.
   * **Public/Private**: Debe ser **Public** (Público) para que GitHub Pages funcione de forma gratuita.
   * **Initialize this repository with**: Deja todas las casillas desactivadas (sin añadir README, .gitignore, ni licencia) para poder subir tus archivos locales limpiamente.
4. Haz clic en **Create repository** (Crear repositorio).

---

## Paso 2: Subir tus Archivos Locales
Abre tu terminal en la carpeta `/home/nassir/portfolio-profesional` y ejecuta los siguientes comandos para conectar tu carpeta local con GitHub y subir el código:

```bash
# Inicializar el repositorio Git local
git init

# Agregar todos los archivos (index.html, style.css, script.js)
git add .

# Realizar el primer commit
git commit -m "feat: inicializar portafolio profesional"

# Cambiar la rama principal a 'main'
git branch -M main

# Conectar tu repositorio local con el remoto de GitHub
# (Reemplaza 'tu-usuario' y 'tu-repositorio' con tus datos reales)
git remote add origin https://github.com/tu-usuario/tu-repositorio.git

# Subir los archivos
git push -u origin main
```

---

## Paso 3: Activar GitHub Pages (si usaste la Opción B)
*Si usaste la **Opción A** (`tu-usuario.github.io`), tu página se desplegará automáticamente y no necesitas hacer este paso.*

Si usaste la **Opción B** (otro nombre de repositorio):
1. Ve a la página de tu repositorio en GitHub.
2. Haz clic en la pestaña **Settings** (Configuración) en la barra superior.
3. En la barra lateral izquierda, selecciona la sección **Pages** (dentro del menú *Code and automation*).
4. Bajo **Build and deployment**:
   * En **Source**, asegúrate de que esté seleccionado `Deploy from a branch`.
   * En **Branch**, selecciona `main` y la carpeta `/ (root)`.
5. Haz clic en **Save** (Guardar).

---

## Paso 4: ¡Tu Portafolio está en Vivo!
En la parte superior de la sección de **Pages** (o después de unos minutos actualizando la página), verás un cuadro que dice:
> **Your site is live at:** `https://tu-usuario.github.io/...`

---

## Recomendaciones para una Hoja de Vida Exitosa en GitHub:
1. **Personalización**: Edita el archivo `index.html` para actualizar los enlaces de contacto (`santiagonassir@gmail.com` y tu enlace a GitHub).
2. **Fotografía/Avatar**: Si quieres incluir una foto profesional tuya, guarda tu imagen en esta carpeta con el nombre `avatar.jpg`, y en `index.html` reemplaza la caja del `<div class="terminal-mini">` (o añade encima) un elemento de imagen: `<img src="avatar.jpg" alt="Santiago Nassir" class="profile-image">`.
3. **Proyectos**: Cada proyecto debe tener un enlace directo a su propio repositorio en GitHub para que los reclutadores puedan ver tu código. Asegúrate de añadir descripciones claras en los archivos `README.md` de esos proyectos.
