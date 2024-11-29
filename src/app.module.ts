import { Module } from '@nestjs/common';
import { importConfigModule } from './config/importConfigModule';
import { AppController } from './app.controller';
import { CodegenService } from './codegen/codegen.service';

@Module({
  imports: [importConfigModule()],
  controllers: [AppController],
  providers: [CodegenService],
})
export class AppModule {}
