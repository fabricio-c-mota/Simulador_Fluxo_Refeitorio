import { error } from "console";
import { SimulationRepositoryMock } from "@/domain/data-management/simulation-repository";
import { throwDeprecation } from "process";
import { add } from "date-fns";
import { Student } from "./student";

//Classe de fila externa que recebe uma lista de alunos 
export class ExternalQueue{
    protected studentQuantity:Student[]; 

    constructor(studentQuantity?:Student[]){
        this.studentQuantity = studentQuantity ?? []; //Assegura que o arrey sempre será um valor válido 
    }

    protected toAddStudent(student:Student){
        this.studentQuantity.push(student)
        console.log("Novo aluno chegou a fila!");
    }

    protected toRemoveStudent():Student{
        let gettinStudents:Student[] = this.studentQuantity;
        if(gettinStudents || gettinStudents.length == 0){
            throw new Error("Não há alunos na fila");
        }

        //Remove aluno pelo conceito de FIFO através de atriubuição do índice 
        let studentIndex:Student = this.studentQuantity[0];
        this.studentQuantity.splice(0, 1);
        console.log("Aluno saiu da fila externa.");
        return studentIndex;
    }
}




