import { Recipes } from 'src/schemas/recipes.schema';
import { RecipesDto } from './dto/recipes.dto';
import { RecipesService } from './recipes.service';
import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  //@UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll(@Query() query: RecipesDto, @Req() req): Promise<Recipes[]> {
    console.log(req.cookies.auth_token);
    if (query.tags && !Array.isArray(query.tags)) {
      query.tags = [query.tags];
    }
    return this.recipesService.findAll(query);
  }
}
