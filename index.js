// Importamos el módulo express
const express = require('express');

// Creamos una aplicación express
const app = express();

// Definimos el puerto en el que escuchará la aplicación
const port = process.env.PORT || 3000;

// Definimos una ruta para manejar las solicitudes a la raíz "/"
app.get('/', (req, res) => {
  // Enviamos una respuesta al cliente
  res.send('¡Hola, mundo desde Vercel!');
});

// Hacemos que la aplicación escuche en el puerto definido
app.listen(port, () => {
  // Imprimimos un mensaje en la consola para confirmar que el servidor está funcionando
  console.log(`Servidor corriendo en http://localhost:${port}/`);
});
