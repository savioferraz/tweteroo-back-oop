import { TweetRepository } from "../../../repositories/TweetRepository";
import { GetTweetController } from "./getTweetsContoller";
import { GetTweetService } from "./getTweetsService";

const tweetRepository = TweetRepository.getInstance();
const getTweeterService = new GetTweetService(tweetRepository);
export const getTweetController = new GetTweetController(getTweeterService);
