import { Tweet } from "../../../models/Tweet";
import { TweetRepository } from "../../../repositories/TweetRepository";

export class GetTweetService {
  constructor(private tweetRepository: TweetRepository) {}

  execute(page: number): Tweet[] {
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    return this.tweetRepository.getTweet(start, end);
  }
}
