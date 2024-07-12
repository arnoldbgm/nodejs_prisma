import express from "express";

// Aqui inicializo mi aplicacion en express
const app = express();
// Este sera el puerto que va a usar mi backend
const port = 3000;

// Aqui se ejecutara mi backend
// Esta parte solo se crea una vez y una vez ya configurada no se vuelve a tocar
try {
  app.listen(port, () => {
    console.log(`Mi Backend esta funcionando 🔥🎉🦾`);
    console.log(`http://localhost:${port}/`);
  });
} catch (error) {
  console.log(error);
}
