import { Injectable } from '@nestjs/common';
import { CreateMessageNotificationDto } from './dto/create-message-notification.dto';
import { UpdateMessageNotificationDto } from './dto/update-message-notification.dto';

@Injectable()
export class MessageNotificationService {
  create(createMessageNotificationDto: CreateMessageNotificationDto) {
    return 'This action adds a new messageNotification';
  }

  findAll() {
    return `This action returns all messageNotification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messageNotification`;
  }

  update(id: number, updateMessageNotificationDto: UpdateMessageNotificationDto) {
    return `This action updates a #${id} messageNotification`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageNotification`;
  }
}
