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

// APARTADO 1 A (filter)

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter((paciente: Pacientes) => paciente.especialidad === "Pediatra");
};

console.log("Pacientes asignados a Pediatría", obtenPacientesAsignadosAPediatria(pacientes));

// APARTADO 1 B (filter)

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter((paciente: Pacientes) => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};

console.log(
  "Pacientes asignados a Pediatría y menores de 10 años",
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes)
);

// APARTADO 2 (some)

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente: Pacientes) => paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39);
};

console.log("El protocolo de urgencia está activado:", activarProtocoloUrgencia(pacientes));

// APARTADO 3 (map)

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.map((paciente: Pacientes) => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    } else {
      return paciente;
    }
  });
};

console.log("Pacientes reasignados:", reasignaPacientesAMedicoFamilia(pacientes));

// APARTADO 4 (some)

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return !pacientes.some((paciente: Pacientes) => paciente.especialidad === "Pediatra");
};

console.log("El Pediatra puede ir a casa:", HayPacientesDePediatria(pacientes));

// APARTADO 5 (reduce)
