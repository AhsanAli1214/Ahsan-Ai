declare module 'wav' {
  import { EventEmitter } from 'events';

  interface WriterOptions {
    channels?: number;
    sampleRate?: number;
    bitDepth?: number;
    [key: string]: any;
  }

  class Writer extends EventEmitter {
    constructor(options?: WriterOptions);
    write(buffer: Buffer): void;
    end(): void;
  }

  export { Writer };
}
