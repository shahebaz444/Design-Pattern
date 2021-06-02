export interface CompressionCode {
  ratio: any;
  compress(): string;
}

export abstract class CompressionCodeImpl implements CompressionCode {
  ratio: any;
  code: CompressionCode;

  constructor(code: CompressionCode) {
    this.code = code;
  }

  abstract compress(): string;
}

export class SimpleCompression extends CompressionCodeImpl {
  compress(): string {
    return '';
  }
}

export class HuffMan extends CompressionCodeImpl {
  compress(): string {
    return 'HuffMan ' + this.code.compress();
  }
}

export class ShannonFano extends CompressionCodeImpl {
  compress(): string {
    return 'ShannonFano ' + this.code.compress();
  }

  returnRatio(): number {
    return 67;
  }
}

export class RLE extends CompressionCodeImpl {
  compress(): string {
    return 'RLE ' + this.code.compress();
  }
}

let compressor: CompressionCode = new RLE(
  new ShannonFano(new HuffMan(new ShannonFano(new SimpleCompression(null))))
);

console.log(compressor.compress());
