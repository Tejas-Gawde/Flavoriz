import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipes } from 'src/schemas/recipes.schema';
import { RecipesDto } from './dto/recipes.dto';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipes.name) private recipesModel: Model<Recipes>,
  ) {}
  async listAll(getRecipesDto: RecipesDto): Promise<Recipes[]> {
    const { search, page, tags } = getRecipesDto;
    const filter: any = {};

    if (search) {
      filter.title = { $regex: search, $options: 'i' };
    }

    if (tags) {
      filter.tags = { $in: tags };
    }

    const pageSize = 12;
    const pageNumber = page ? page : 1;
    const skip = (pageNumber - 1) * pageSize;

    return this.recipesModel
      .find(filter)
      .select('_id title img')
      .skip(skip)
      .limit(pageSize)
      .exec();
  }
}
