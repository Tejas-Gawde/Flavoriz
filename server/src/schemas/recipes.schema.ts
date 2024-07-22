import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'recipes' })
export class Recipes {
  @Prop()
  title: string;

  @Prop()
  img: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipes);
