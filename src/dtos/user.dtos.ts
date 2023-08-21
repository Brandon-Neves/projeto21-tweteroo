import { IsUrl, isNotEmpty, isString } from "class-validator";

export class CreateUser {

  @isString({message: 'All fields are required!'})
  @isNotEmpty({message: 'All are required!'})
  username: string;

  @isString({message: 'All fields are required!'})
  @isNotEmpty({message: 'All are required!'})
  @IsUrl
  avatar: string;
}