import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipesModule } from './recipes/recipes.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Tejas_Recipe:J7HpwCpbtIrnDTnY@cluster0.xfkyoii.mongodb.net/RecipeBlog?retryWrites=true&w=majority&appName=Cluster0',
    ),
    RecipesModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
