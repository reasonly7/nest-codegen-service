import { Controller, Get, Res, StreamableFile } from '@nestjs/common';
import { CodegenService } from './codegen/codegen.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly codegenService: CodegenService) {}

  @Get()
  sayHello() {
    return 'Hello, World!';
  }

  @Get('/codegen')
  async codegen(@Res({ passthrough: true }) res: Response) {
    const zipStream = await this.codegenService.codegen();
    res.set({
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename=example-project.zip',
    });
    return new StreamableFile(zipStream);
  }
}
