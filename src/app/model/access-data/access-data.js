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

function insert(nuevaPersona){
    const result = dataBase.personasRegistradas;
    result.push(nuevaPersona);
}

export const accessData = {
    selectAll,
    selectById,
    insert
}