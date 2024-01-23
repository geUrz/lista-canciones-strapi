'use strict';
const http = require('http');
const {Server} = require('socket.io');
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
register({strapi }) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
      const server = http.createServer(strapi.server.httpServer);
      const io = new Server(server, {
        path: "/",
        cors: {
          origin: "*",
          methods: ["GET", "POST"],
          allowedHeaders: ["my-custom-header"],
          credentials: true,
        },
      });

    
      console.log("hola")
      // Configuración de eventos de Socket.IO aquí
      io.on("connection", function (socket) {
        console.log("new user connected")
        setInterval(() => {
          
          io.emit("mensaje", "hola")
        }, 1000*3);
        socket.on('disconnect', () => {
          console.log('Cliente desconectado');
        });
      })
    
  },
};
