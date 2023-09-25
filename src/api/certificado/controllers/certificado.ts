/**
 * certificado controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::certificado.certificado', ({strapi}) => ({
    async calculateTotals(ctx) {
        try {
            const calculo = await strapi.service('api::certificado.certificado').getTotals(ctx.request.params.id);
            return calculo;
           } catch (err) {
             console.log('err');
           }
    }
}));
