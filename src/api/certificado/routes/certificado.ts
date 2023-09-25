export default {
    routes: [
      {
        method: 'GET',
        path: '/certificado/:id',
        handler: 'certificado.calculateTotals',
      }
    ]
  }