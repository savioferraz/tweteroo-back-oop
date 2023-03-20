import { TweetRepository } from "../../../repositories/TweetRepository";
import { getLoggedUserService } from "../../Users/getLoggedUser";

interface IRequestTweet {
  username: string;
  tweet: string;
}

export class PostTweeterService {
  constructor(private tweetRepository: TweetRepository) {}

  execute({ username, tweet }: IRequestTweet): void {
    if (!username || !tweet) {
      throw new Error("Todos os campos são obrigatórios!");
    }

    const { avatar } = getLoggedUserService.execute(username);

    this.tweetRepository.postTweet({ username, tweet, avatar });
  }
}
