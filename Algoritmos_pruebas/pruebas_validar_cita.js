/**
 * Pruebas independientes para la rama pruebas.
 * Datos ficticios. Ejecutar opcionalmente: node pruebas_validar_cita.js
 * En esta rama NO existe Docs ni codigo del servicio en desarrollo.
 */
const assert = require('node:assert/strict');
function validarCita({ afiliadoActivo, disponibilidad }) {
  if (typeof afiliadoActivo !== 'boolean') return false;
  if (!Number.isInteger(disponibilidad) || disponibilidad < 0) return false;
  return afiliadoActivo && disponibilidad > 0;
}

const casos = [
  [{ afiliadoActivo: true, disponibilidad: 2 }, true],
  [{ afiliadoActivo: false, disponibilidad: 2 }, false],
  [{ afiliadoActivo: true, disponibilidad: 0 }, false],
  [{ afiliadoActivo: true, disponibilidad: -1 }, false],
  [{ afiliadoActivo: 'si', disponibilidad: 2 }, false],
  [{ afiliadoActivo: true, disponibilidad: 1.5 }, false],
];
casos.forEach(([entrada, esperado], indice) => {
  assert.equal(validarCita(entrada), esperado, `Fallo en el caso ${indice + 1}`);
});
console.log(`${casos.length} pruebas finalizadas correctamente (datos ficticios).`);
