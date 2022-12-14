import { model, Schema } from "mongoose";

export interface Agenda {
  _id?: string;
  nombre: string;
  descripcion: string;
  disponible: boolean;
  atiendeDomingo: boolean;
  atiendeSabado: boolean;
  responsables: string[];
}

const AgendaSchema = new Schema<Agenda>(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    disponible: { type: Boolean, required: true },
    atiendeDomingo: { type: Boolean, required: true },
    atiendeSabado: { type: Boolean, required: true },
    responsables: [
      {
        type: String,
        required: false,
      },
    ],
  },
  { timestamps: true }
);

export const AgendaModel = model<Agenda>("Agenda", AgendaSchema);
