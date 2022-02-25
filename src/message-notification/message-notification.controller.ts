import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageNotificationService } from './message-notification.service';
import { CreateMessageNotificationDto } from './dto/create-message-notification.dto';
import { UpdateMessageNotificationDto } from './dto/update-message-notification.dto';

@Controller('message-notification')
export class MessageNotificationController {
  constructor(private readonly messageNotificationService: MessageNotificationService) {}

  @Post()
  create(@Body() createMessageNotificationDto: CreateMessageNotificationDto) {
    return this.messageNotificationService.create(createMessageNotificationDto);
  }

  @Get()
  findAll() {
    return this.messageNotificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageNotificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageNotificationDto: UpdateMessageNotificationDto) {
    return this.messageNotificationService.update(+id, updateMessageNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageNotificationService.remove(+id);
  }
}
