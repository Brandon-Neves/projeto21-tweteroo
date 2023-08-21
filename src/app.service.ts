import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { Tweets } from './entities/tweets.entity';
import { User } from './entities/user.entity';
import { CreateUser } from './dtos/user.dtos';
import { CreateTweets } from './dtos/tweets.dtos';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweets[];

  constructor() {
    this.tweets = [];
    this.users = [];
  }

  getHeath(): string {
    return 'Server is Runing!';
  }

  createUser(body: CreateUser) {
    const user = new User(body.username, body.avatar);
    return this.users.push(user);
  }

  createTweets(body: CreateTweets) {
    const {username, tweet} = body;

    const tweetUser = this.users.find((u) => String(u.username) === String(username));
    if(!tweetUser) {
      throw new UnauthorizedException('Unregistered User');
    }
    const userIsExist = this.users.find((u) => u.getUsername() === tweetUser.getUsername());

    const newTweet = new Tweets(userIsExist, body.tweet)
    return this.tweets.push(tweet);
}
