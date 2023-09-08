/**
 * empleado controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::empleado.empleado', ({strapi}) => ({
    async calculateSueldo(ctx) {
        try {
         const calculo = await strapi.service('api::empleado.empleado').calcular(ctx.request.params.id,ctx.request.params.periodo);
         return `El empleado ${calculo.nombre} trabajo ${calculo.TotalHoras} horas en la semana del ${ctx.request.params.periodo} y debe cobrar $ ${calculo.sueldo}'`
        } catch (err) {
          console.log('err');
        }
    }
}));
