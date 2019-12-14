import { ParserField } from '../../Models';
import { Template } from './Template';

/**
 * resolve comment node
 */
export class CommentTemplate implements Template {
  static resolve(f: ParserField): string {
    return f.description ? `# ${f.description}` : '';
  }
}
