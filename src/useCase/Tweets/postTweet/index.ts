import { TweetRepository } from "../../../repositories/TweetRepository";
import { PostTweetController } from "./postTweetController";
import { PostTweeterService } from "./postTweetService";

const tweetRepository = TweetRepository.getInstance();
const postTweeterService = new PostTweeterService(tweetRepository);
export const postTweetController = new PostTweetController(postTweeterService);
