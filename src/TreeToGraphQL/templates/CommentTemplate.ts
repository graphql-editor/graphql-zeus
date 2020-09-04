import { ParserField } from '@/Models';

/**
 * resolve comment node
 */
export class CommentTemplate {
  static resolve(f: ParserField): string {
    return f.description ? `# ${f.description}` : '';
  }
}
