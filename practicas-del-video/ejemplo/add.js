// Archivo: add.js
// Demostración de Exportaciones nombradas (ES Modules)

export function add(x = 0, y = 0) {
  return x + y;
}

export function multiply(x = 1, y = 1) {
  return x * y;
}

// Exportación por defecto opcional
export default function subtract(x = 0, y = 0) {
  return x - y;
}
