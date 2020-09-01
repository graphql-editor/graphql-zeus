import { ParserField } from '@/Models';

/**
 * Template for union member represented in GraphQL Union - `type U = A | B` where A and B are union members
 */
export class UnionMemberTemplate {
  static resolve(f: ParserField): string {
    return f.type.name;
  }
}
