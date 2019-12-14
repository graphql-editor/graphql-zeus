import { ParserField } from '../../Models';
import { Template } from './Template';

/**
 * resolve comment node
 */
export class CommentTemplate extends Template {
  static resolve(f: ParserField): string {
    return f.description ? `# ${f.description}` : '';
  }
}
