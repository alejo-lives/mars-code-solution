// El traje espacial ha sufrido una falla en su sistema de energía. ¡Hay que equilibrar la energía de los componentes!

// Equilibrio Energético del Traje Aeroespacial
// El traje espacial se compone de varios componentes. Cada uno tiene un nivel de energía representado por un
// número entero en un array. Para que el traje funcione bien, todos los componentes deben tener el mismo nivel de energía.

// Objetivo del Reto
// Redistribuye la energía entre los componentes utilizando únicamente la energía actualmente disponible.
// ¡No se permite añadir energía externa!

// Instrucciones y Requisitos
//
// Calcula el nivel objetivo: Determina el entero menor o igual al promedio actual de energía, es decir, el piso (Math.floor)
// de la división de la suma total de energía por el número de componentes.
// Este valor será el nivel que tendrá cada componente tras la redistribución.
//
// Energía sobrante: La energía sobrante es la diferencia entre la suma total de energía y
// el total consumido para equiparar todos los componentes al nivel objetivo.
//
// Salida de la función: La solución debe devolver un objeto que incluya:
// balanced: Un array con el nivel objetivo asignado a cada componente.
// leftover: El número de unidades de energía sobrante.
//
// No se permite añadir energía externa. Debes trabajar únicamente con la energía disponible en el array.
// ¡Recuerda! Sólo puedes usar la energía actual para equilibrar los componentes del traje.
// Así que leftover como mínimo debe ser 0.

function balanceEnergy(energy) {
  let totalEnergy = 0;
  for (let i = 0; i < energy.length; i++) {
    totalEnergy = totalEnergy + energy[i];
  }
  let targetLevel = Math.floor(totalEnergy / energy.length);
  let balanced = [];

  for (let i = 0; i < energy.length; i++) {
    balanced.push(targetLevel);
  }

  let totalUsed = targetLevel * energy.length;
  let leftover = totalEnergy - totalUsed;
  return { balanced: balanced, leftover: leftover };
}

console.log(
  balanceEnergy([1, 2, 3, 4]),
  balanceEnergy([1, 3, 2]),
  balanceEnergy([4, 6, 4]),
  balanceEnergy([1, 1])
);
