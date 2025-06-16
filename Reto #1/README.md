# Instrucciones

## Crea una función que pueda descifrar mensajes encriptados siguiendo este patrón:

### Reglas de decodificación

Convierte números a letras según:

```bash
0 -> o
1 -> i
3 -> e
4 -> a
5 -> s
7 -> t
```

Si encuentras el símbolo `>`, intercambia la letra que está a su izquierda con la de la derecha.

Si encuentras el símbolo `*`, elimina la letra que está a su derecha.

Elimina los símbolos `>` y `*` después de haberlos evaluado.

Elimina cualquier símbolo que no sea letra, número, ¿?!¡, o espacio.

**¡Las letras con acento hay que mantenerlas!**

El mensaje original debe contener información vital de la misión.
