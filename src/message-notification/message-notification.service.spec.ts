import { Test, TestingModule } from '@nestjs/testing';
import { MessageNotificationService } from './message-notification.service';

describe('MessageNotificationService', () => {
  let service: MessageNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageNotificationService],
    }).compile();

    service = module.get<MessageNotificationService>(MessageNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
