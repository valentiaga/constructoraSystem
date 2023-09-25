/**
 * certificado service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::certificado.certificado', ({strapi}) => ({
    async getTotals(id: string) {
        let TotalCertificate:number = 0;
        let partialPesos:number = 0;
        const certif = await strapi.entityService.findOne('api::certificado.certificado', id, {
            populate: {
                proovedore: true,
                Avance: {
                    populate: ['Porcentaje','Pesos','Item']
                },
                Aumentos: {
                    populate: ['Porcentaje','Importe']
                },
                Adicionales: {
                    populate:['Importe']
                }
            }
        });
        
        certif.Avance.map(item => {
            partialPesos = +item.Pesos;
            TotalCertificate = TotalCertificate + partialPesos;
        })
        certif.Aumentos.map(item => {
            partialPesos = +item.Importe;
            TotalCertificate = TotalCertificate + partialPesos;

        })
        certif.Adicionales.map(item => {
            partialPesos = +item.Importe;
            TotalCertificate = TotalCertificate + partialPesos;
        });
        return TotalCertificate;
    }
}));
