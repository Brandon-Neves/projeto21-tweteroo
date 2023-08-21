
export class Tweets {
  public username: string;
  private tweet: string;

  constructor(tweet: string, username: string) {
    this.tweet = tweet;
    this.username = username;
  }

  getUser() {
    return this.username;
  }

  getTweet() {
    return this.tweet;
  }
}
