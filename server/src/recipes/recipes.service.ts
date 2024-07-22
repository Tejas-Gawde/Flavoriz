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
  async findAll(getRecipesDto: RecipesDto): Promise<Recipes[]> {
    const { search, page, tags } = getRecipesDto;
    const filter: any = {};

    if (search) {
      filter.title = { $regex: search, $options: 'i' }; // Case-insensitive search on title
    }

    if (tags) {
      filter.tags = { $in: tags }; // Filter by tags array
    }

    const pageSize = 12; // Define the number of items per page
    const pageNumber = page ? page : 1; // Default to page 1 if page is not provided
    const skip = (pageNumber - 1) * pageSize;

    return this.recipesModel.find(filter).skip(skip).limit(pageSize).exec();
  }
}
