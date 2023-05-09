import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  // id: string // Mongoose me lo da

  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
