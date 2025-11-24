import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { useMDXComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';

export const generateStaticParams = generateStaticParamsFor('slug');

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;

  // Skip metadata generation for Chrome DevTools and other browser requests
  if (params.slug && params.slug[0] === '.well-known') {
    return {};
  }

  try {
    const { metadata } = await importPage(params.slug);
    return metadata;
  } catch (error) {
    return {};
  }
}

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;

  // Handle browser tool requests
  if (params.slug && params.slug[0] === '.well-known') {
    notFound();
  }

  try {
    const result = await importPage(params.slug);
    const { default: MDXContent, toc, metadata } = result;
    const Wrapper = useMDXComponents().wrapper!;

    return (
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    );
  } catch (error) {
    notFound();
  }
}
