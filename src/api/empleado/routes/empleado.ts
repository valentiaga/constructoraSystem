export default {
    routes: [
      {
        method: 'GET',
        path: '/empleados/:id/:periodo/sueldo',
        handler: 'empleado.calculateSueldo',
      }
    ]
  }