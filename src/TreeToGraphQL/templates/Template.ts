import { ParserField } from 'Models';

export declare abstract class Template {
  static resolve(f: ParserField): string;
}
