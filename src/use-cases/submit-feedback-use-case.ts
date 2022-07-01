import { FeedBacksRepository } from './../repositories/feedbacks-repository';
interface SubmitFeedbackUseCaseRequest {
  type: string,
  comment: string,
  screenshot?: string,
}

export class SubmitFeedbackUseCase {

  constructor(
    private FeedBacksRepository: FeedBacksRepository
  ) { }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Types is required');
    }
    if (!comment) {
      throw new Error('Comment is required');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format');
    }

    await this.FeedBacksRepository.create({
      type,
      comment,
      screenshot
    })

  }
}