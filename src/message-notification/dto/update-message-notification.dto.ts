import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageNotificationDto } from './create-message-notification.dto';

export class UpdateMessageNotificationDto extends PartialType(CreateMessageNotificationDto) {}
