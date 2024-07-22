import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Recipes, RecipeSchema } from 'src/schemas/recipes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Recipes.name, schema: RecipeSchema }]),
  ],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
