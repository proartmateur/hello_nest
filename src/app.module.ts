import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { MessageNotificationModule } from './message-notification/message-notification.module';

@Module({
  imports: [PostModule, MessageNotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
