import { Injectable } from '@nestjs/common';
import { loadProject } from './utils/loadProject';
import * as path from 'node:path';
import { createZipFromMemory } from './utils/createZipFromMemory';

@Injectable()
export class CodegenService {
  async codegen() {
    const fileData = await loadProject(
      path.resolve(__dirname, '../../example-project'),
    );
    const zipStream = await createZipFromMemory(fileData);
    return zipStream;
  }
}
