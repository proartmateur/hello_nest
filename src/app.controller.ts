import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  hello(): string {
    return 'hello';
  }

  @Get('hello/:id')
  hello2(): string {
    return 'hello2';
  }

  @Get('helloq')
  helloq(@Query() query: any): any {
    return {
      m: 'Hello Query',
      query,
    };
  }

  @Get('helloq2')
  helloq2(@Query('min') min: number): any {
    console.log('Query min:', min, typeof min);
    return {
      m: 'Hello Query',
      min,
    };
  }

  @Get('helloq3')
  helloq3(@Query('min') min = 100): any {
    console.log('Query min:', min, typeof min);
    return {
      m: 'Hello Query',
      min,
    };
  }
}
