import { PersonInterface } from '../interfaces/PersonInterface'

export type StarWarsDataType = Array<Pick<PersonInterface, 'name' | 'created' | 'vehicles'>>
