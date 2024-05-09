# Introducción

Estamos desarrollando un software hospitalario, y el cliente nos pide poder realizar una serie se operaciones sobre una lista de pacientes.

El set de datos inicial:

```
type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];
```

# Apartados obligatorios

## Apartado 1

a) Queremos extraer la lista de paciente que están asignados a la especialidad de _Pediatría_

Firma de la función:

```
const obtenPacientesAsignadosAPediatria = (
pacientes: Pacientes[]
): Pacientes[] => {
// Tu implementación aquí :)
};
```

b) Queremos extraer la lista de pacientes asignados a _Pediatría_ y que tengan una edad menor de 10 años.

```
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
pacientes: Pacientes[]
): Pacientes[] => {
// Tu implementación aquí :)
};
```

## Apartado 2

Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como:

```
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
let activarProctolo = false;

// Tu implementación aquí :)

return activarProctolo;
};
```

## Apartado 3

El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de _medico de familia_.

```
const reasignaPacientesAMedicoFamilia = (
pacientes: Pacientes[]
): Pacientes[] => {
// Tu implementación aquí :)
};
```

## Apartado 4

Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a _pediatría_

```
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
// Tu implementación aquí :)
};
```

# Apartados opcionales

## Apartado 5

Queremos calcular el número total de pacientes que están asignados a la especialidad de _Medico de familia_, y lo que están asignados a _Pediatría_ y a _cardiología_

```
interface NumeroPacientesPorEspecialidad {
medicoDeFamilia: number;
pediatria: number;
cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
// Tu implementación aquí :)
};
```
