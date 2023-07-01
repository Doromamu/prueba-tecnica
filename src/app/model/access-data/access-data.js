import dataBase from "../../data/database";

function selectAll() {
    const result = dataBase.personasRegistradas;
    return result;
}

function selectById(_id){
    const result = dataBase.personasRegistradas;
    const persona = result.filter(persona => persona.id == _id);
    return persona;
}

export const accessData = {
    selectAll,
    selectById
}