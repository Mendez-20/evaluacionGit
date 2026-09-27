/**
 * Ejemplo academico e independiente: valida una solicitud de cita.
 * No se conecta a una EPS ni contiene datos personales.
 * Ejecutar opcionalmente: node validar_cita.js
 */
function validarCita({ afiliadoActivo, disponibilidad }) {
  if (typeof afiliadoActivo !== 'boolean') {
    return { valida: false, motivo: 'Estado de afiliacion invalido' };
  }
  if (!Number.isInteger(disponibilidad) || disponibilidad < 0) {
    return { valida: false, motivo: 'Disponibilidad invalida' };
  }
  if (!afiliadoActivo) {
    return { valida: false, motivo: 'Afiliacion inactiva' };
  }
  if (disponibilidad === 0) {
    return { valida: false, motivo: 'No hay cupos disponibles' };
  }
  return { valida: true, motivo: 'Solicitud apta para continuar' };
}

if (require.main === module) {
  const ejemplo = validarCita({ afiliadoActivo: true, disponibilidad: 1 });
  console.log(ejemplo);
}
module.exports = { validarCita };
