# Configuración de Instagram Feed

Este proyecto incluye integración con Instagram para mostrar las últimas publicaciones en el feed. Hay dos métodos disponibles:

## Método 1: Instagram Graph API (Recomendado)

Este es el método oficial de Instagram/Facebook. Requiere:

1. **Cuenta de Instagram Business o Creator**
   - Convierte tu cuenta personal a Business o Creator en la app de Instagram

2. **Facebook App**
   - Ve a [Facebook Developers](https://developers.facebook.com/)
   - Crea una nueva app
   - Agrega el producto "Instagram Basic Display"
   - Configura las URLs de redirección
   - Obtén el Access Token

3. **Configuración**
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega las siguientes variables:
   ```env
   INSTAGRAM_API_METHOD=graph
   INSTAGRAM_ACCESS_TOKEN=tu_access_token
   NEXT_PUBLIC_INSTAGRAM_USERNAME=tu_usuario_instagram
   ```
   
   **Nota:** Con Graph API, el `INSTAGRAM_USERNAME` no es necesario porque usa el endpoint `/me/` que obtiene las publicaciones de la cuenta asociada al access token.

## Método 2: RapidAPI (Alternativa)

Si no tienes acceso a Instagram Graph API, puedes usar un servicio de terceros:

1. **Crear cuenta en RapidAPI**
   - Ve a [RapidAPI](https://rapidapi.com/hub)
   - Crea una cuenta
   - Busca "Instagram Scraper API" o similar
   - Suscríbete a un plan (algunos tienen tier gratuito)

2. **Configuración**
   - Obtén tu API Key de RapidAPI
   - Crea un archivo `.env` en la raíz del proyecto:
   ```env
   INSTAGRAM_API_METHOD=rapidapi
   INSTAGRAM_USERNAME=healskin.bio
   RAPIDAPI_KEY=tu_rapidapi_key
   RAPIDAPI_HOST=instagram-scraper-stable-api.p.rapidapi.com
   NEXT_PUBLIC_INSTAGRAM_USERNAME=healskin.bio
   ```
   
   **Nota:** El endpoint `ig_get_fb_profile_hover.php` obtiene información del perfil. Si este endpoint no devuelve publicaciones, es posible que necesites verificar la documentación de la API para encontrar un endpoint específico para obtener el feed de publicaciones.

## Uso

1. **Instalar dependencias** (si no están instaladas):
   ```bash
   npm install
   ```

2. **Configurar variables de entorno**:
   - Copia `.env.example` a `.env`
   - Completa las variables según el método elegido

3. **Obtener publicaciones de Instagram**:
   ```bash
   npm run fetch:instagram
   ```

4. **Build del proyecto**:
   ```bash
   npm run build
   ```
   
   El script `fetch:instagram` se ejecutará automáticamente antes del build (prebuild hook).

## Estructura de Datos

Las publicaciones se guardan en `src/lib/instagram-posts.json`:

```json
{
  "posts": [
    {
      "id": "post_id",
      "imageUrl": "https://...",
      "caption": "Caption text",
      "permalink": "https://www.instagram.com/p/...",
      "timestamp": "2024-01-01T00:00:00.000Z"
    }
  ],
  "lastUpdated": "2024-01-01T00:00:00.000Z"
}
```

## Notas

- El feed se actualiza solo cuando ejecutas `npm run fetch:instagram` o `npm run build`
- Las publicaciones se limitan a las 6 más recientes
- Si no hay publicaciones disponibles, se muestran placeholders
- El componente es completamente estático y funciona con SSG
- No se requiere autenticación en el cliente, todo se hace en build time

## Solución de Problemas

### Error: "INSTAGRAM_USERNAME not set"
- Asegúrate de que el archivo `.env` existe y tiene las variables correctas
- Verifica que el archivo `.env` está en la raíz del proyecto (no en `src/`)

### Error: "Failed to fetch user ID"
- Verifica que el Access Token es válido
- Asegúrate de que la cuenta de Instagram está conectada a Facebook
- Verifica los permisos de la Facebook App

### Error: "RapidAPI Error"
- Verifica que la API Key es correcta
- Asegúrate de que estás suscrito al plan correcto en RapidAPI
- Verifica que el endpoint de la API está disponible

### No se muestran imágenes
- Verifica que el archivo `src/lib/instagram-posts.json` tiene datos
- Ejecuta `npm run fetch:instagram` manualmente
- Verifica que las URLs de las imágenes son accesibles

