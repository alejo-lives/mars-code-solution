# Objetivo del Reto

Redistribuye la energía entre los componentes utilizando únicamente la energía actualmente disponible.
¡No se permite añadir energía externa!

## Instrucciones y Requisitos

**Calcula el nivel objetivo:** Determina el entero menor o igual al promedio actual de energía, es decir, el piso (Math.floor)
de la división de la suma total de energía por el número de componentes.
Este valor será el nivel que tendrá cada componente tras la redistribución.

**Energía sobrante:** La energía sobrante es la diferencia entre la suma total de energía y
el total consumido para equiparar todos los componentes al nivel objetivo.

**Salida de la función:** La solución debe devolver un objeto que incluya:
balanced: Un array con el nivel objetivo asignado a cada componente.
leftover: El número de unidades de energía sobrante.

No se permite añadir energía externa. Debes trabajar únicamente con la energía disponible en el array.

¡Recuerda! Sólo puedes usar la energía actual para equilibrar los componentes del traje.
Así que leftover como mínimo debe ser 0.
