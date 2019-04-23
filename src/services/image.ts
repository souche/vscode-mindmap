export class Img {
  base64ToPng(base64: string) {
    const formattedBase64Str = base64.replace(/^data:image\/\w+;base64,/, '');

    return Buffer.from(formattedBase64Str, 'base64');
  }
}
