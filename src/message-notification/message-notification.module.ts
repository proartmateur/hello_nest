import { Module } from '@nestjs/common';
import { MessageNotificationService } from './message-notification.service';
import { MessageNotificationController } from './message-notification.controller';

@Module({
  controllers: [MessageNotificationController],
  providers: [MessageNotificationService]
})
export class MessageNotificationModule {}
