import {PersonInterface} from "../interfaces/PersonInterface";

export type StarWarsDataType = Pick<PersonInterface, 'name' | 'created' | 'vehicles'>[];