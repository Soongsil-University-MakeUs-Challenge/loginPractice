import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const option: SchemaOptions = {
  timestamps: true,
};

@Schema(option)
export class User extends Document {
  @Prop({ required: true })
  @IsNotEmpty()
  id: string;

  @Prop({ required: true })
  @IsNotEmpty()
  password: string;

  @Prop({ required: false })
  @IsEmail()
  email: string;

  @Prop({ required: false })
  nickname: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
