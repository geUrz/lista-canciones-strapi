'use strict';

/**
 * `SendNewSongIO` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  //logica para enviar el evento de creacion de la cancion.
  
  return async (ctx, next) => {
    strapi.log.info('In SendNewSongIO middleware.');

    await next();
  };
};
