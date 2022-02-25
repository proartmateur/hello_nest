import { Test, TestingModule } from '@nestjs/testing';
import { MessageNotificationController } from './message-notification.controller';
import { MessageNotificationService } from './message-notification.service';

describe('MessageNotificationController', () => {
  let controller: MessageNotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageNotificationController],
      providers: [MessageNotificationService],
    }).compile();

    controller = module.get<MessageNotificationController>(MessageNotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
