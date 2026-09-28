# Screenshots reales de proyectos 📸

Coloca aquí tus capturas reales con estos nombres **EXACTOS** y el sitio las
usará automáticamente — sin tocar código. Mientras el archivo no exista, se
muestra el mockup SVG:

| Archivo                    | Proyecto                                  |
| -------------------------- | ----------------------------------------- |
| `proyecto-iot.png`         | Sistema IoT de Monitoreo (Trabajo de Grado) |
| `akahl-catalogue.png`      | Akahl Catalogue                           |
| `akahl-club.png`           | Akahl Club                                |

## Recomendaciones

- Formato PNG (si usas `.jpg`, cambia también la extensión en `src/data/site.js`)
- Proporción 4:3 o 16:10, mínimo ~1200px de ancho (se muestran a ~640px)
- **Screenshots reales > mockups**: a un cliente siempre le gusta más ver el
  producto real. Captura el dashboard IoT con datos reales y el portal Akahl
  con el catálogo cargado.
- Si el screenshot tiene mucho fondo vacío, recórtalo antes de subirlo.

## Fotos de testimonios (opcional)

Guarda las fotos en `public/images/avatars/` (ej. `alex.png`) y agrega en
`src/data/content.en.js` y `content.es.js` el campo:

```js
avatar: "/images/avatars/alex.png",
```

Mientras no haya foto, se muestran las iniciales — ya se ve bien así.
