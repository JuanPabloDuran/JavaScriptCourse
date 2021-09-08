//Manejo de clases en javascript//

class Persona{
    constructor(name, years, jobs = []){
        this.nombre = name;
        this.edad = years;
        this.trabajos = jobs;
    }

    getBiografia(){
        let biografia = `${this.nombre}, tiene ${this.edad} y trabaja de: `;

        this.trabajos.forEach((trabajo) =>{
            biografia += `${trabajo}, `;
        })
        return biografia;
    }
}

class Empleado extends Persona{
    constructor(name, years, jobs = [], salary, position){
        super(name, years, jobs);
        this.salary = salary;
        this.position = position;
    }
    getBiografia(){
        return super.getBiografia() + `Puesto: ${this.position}, Salario: ${this.salary}`;
    }
}

const persona1 = new Empleado('Pablo', 45, ['programador, backend'], 9500, 'Junior');

console.log(persona1.getBiografia());

