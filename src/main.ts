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

// APARTADO 1 A

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesAsigandosAPediatria: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesAsigandosAPediatria.push(pacientes[i]);
    }
  }
  return pacientesAsigandosAPediatria;
};

console.log("Pacientes pediatria", obtenPacientesAsignadosAPediatria(pacientes));

// APARTADO 1 B

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesAsignadosAPediatriaMenores10: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesAsignadosAPediatriaMenores10.push(pacientes[i]);
    }
  }
  return pacientesAsignadosAPediatriaMenores10;
};

console.log("Pacientes Pediatria menores de 10 años", obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// APARTADO 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProtocolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
      activarProtocolo = true;
    }
  }

  return activarProtocolo;
};

console.log("El protocolo de urgencia esta en estado: ", activarProtocoloUrgencia(pacientes));

// APARTADO 3

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  let pacientesReasignados: Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      const pacienteReasignado: Pacientes = { ...pacientes[i], especialidad: "Medico de familia" };
      pacientesReasignados.push(pacienteReasignado);
    }
  }
  return pacientesReasignados;
};

console.log(
  "Los pacientes reasignados de Pediatria a Medico de familia son",
  reasignaPacientesAMedicoFamilia(pacientes)
);

console.log(pacientes);

// APARTADO 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      return false;
    }
  }
  return true;
};

console.log("El Pediatra puede ir a casa: ", HayPacientesDePediatria(pacientes));

// APARTADO 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  let medicoDeFamilia: number = 0;
  let pediatria: number = 0;
  let cardiologia: number = 0;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") medicoDeFamilia++;
    if (pacientes[i].especialidad === "Pediatra") pediatria++;
    if (pacientes[i].especialidad === "Cardiólogo") cardiologia++;
  }

  return { medicoDeFamilia, pediatria, cardiologia };
};

console.log("Listado de pacientes por especialidad", cuentaPacientesPorEspecialidad(pacientes));
