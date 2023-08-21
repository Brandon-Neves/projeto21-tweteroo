import { isNotEmpty, isString} from 'class-validator';
import { User } from 'src/entities/user.entity';

export class CreateTweets {
  @isString()
  @isNotEmpty()
  username: User;

  @isString
  @isNotEmpty
  tweet: string;
}