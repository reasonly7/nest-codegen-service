import * as archiver from 'archiver';
import * as stream from 'stream';

export const createZipFromMemory = async (fileData: Record<string, string>) => {
  // 创建一个可写流用于保存 ZIP 数据
  const zipStream = new stream.PassThrough();
  const archive = archiver('zip', { zlib: { level: 9 } });

  // 捕获压缩完成事件
  archive.on('end', () => {
    console.log(`ZIP size: ${archive.pointer()} bytes`);
  });

  // 捕获错误事件
  archive.on('error', (err: unknown) => {
    throw err;
  });

  // 将 ZIP 数据写入可写流
  archive.pipe(zipStream);

  // 添加内存中的数据到 ZIP 文件
  for (const [filePath, content] of Object.entries(fileData)) {
    archive.append(content, { name: filePath });
  }

  // 完成 ZIP 文件创建
  await archive.finalize();

  // 返回流对象
  return zipStream;
};
