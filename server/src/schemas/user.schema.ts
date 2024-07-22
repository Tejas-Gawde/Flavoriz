import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'users', timestamps: true })
export class User {
  @Prop()
  username: string;

  @Prop({ unique: [true, 'Email already exists'] })
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
