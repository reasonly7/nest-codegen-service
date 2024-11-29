import { Controller, Get } from '@nestjs/common';
import { CodegenService } from './codegen/codegen.service';

@Controller()
export class AppController {
  constructor(private readonly codegenService: CodegenService) {}

  @Get()
  sayHello() {
    return 'Hello, World!';
  }

  @Get('/codegen')
  codegen() {
    return this.codegenService.codegen();
  }
}
