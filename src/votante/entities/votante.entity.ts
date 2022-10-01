import * as mongoose from 'mongoose';

export const VotanteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cedula: { type: Number, required: true },
}, {collection: "Voting"});

export interface Votante extends mongoose.Document {
  _id: Number;
  nombre: string;
  apellido: string;
  cedula: number;
}

const Vontante = mongoose.model('Votante', VotanteSchema, "Voting");

