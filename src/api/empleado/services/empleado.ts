/**
 * empleado service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::empleado.empleado', ({ strapi }) => ({
    async calcular(id: string, periodo) {
        try {
            let TotalHoras = 0;
            const emp = await strapi.entityService.findOne('api::empleado.empleado', id, {
                populate: {
                    cargos: true, asistencias: {
                        populate: ['Asistencia']
                    }
                }
            });
            const SemanaProcesada = emp.asistencias.find(item => item.InicioSemana === periodo);            
            if (SemanaProcesada) {
                SemanaProcesada.Asistencia.map((asist) => {                        
                    TotalHoras += asist.CantidadHoras;
                });
            }
            return {
                nombre: `${emp.Apellido}, ${emp.Nombre}`,
                TotalHoras,
                sueldo: TotalHoras * emp.cargos.PrecioHora
            }
        } catch (error) {
            console.log(error);
        }
    }
}));
