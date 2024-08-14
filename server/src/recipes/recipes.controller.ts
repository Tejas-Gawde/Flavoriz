import { Recipes } from 'src/schemas/recipes.schema';
import { RecipesDto } from './dto/recipes.dto';
import { RecipesService } from './recipes.service';
import { Controller, Get, Query, Req } from '@nestjs/common';

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
    return await this.recipesService.listAll(query);
  }
}
