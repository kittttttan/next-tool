export function format(buffer: ArrayBuffer): string {
  let hex = '';
  const bin = new Uint8Array(buffer);
  for (let b of bin as any) {
    hex += ('0' + b.toString(16)).slice(-2);
  }

  return hex.toUpperCase();
}

export function hexToBin(hex: string): Blob {
  const size = hex.length >> 1;
  const bin = new Uint8Array(size);
  for (let i = 0; i < size; ++i) {
    const pos = i << 1;
    const str = hex.substring(pos, pos + 2);
    bin[i] = parseInt(str, 16);
  }

  return new Blob([bin], {
    type: 'application/octet-binary'
  });
}

export function hex2rgba(code: string, opacity = 1): string {
  return `rgba(${parseInt(code.slice(-6, -4), 16)},${parseInt(code.slice(-4, -2), 16)},${parseInt(code.slice(-2), 16)},${opacity})`
}
