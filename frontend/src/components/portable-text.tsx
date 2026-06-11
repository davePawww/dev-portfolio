import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-sm leading-7 not-first:mt-6">{children}</p>,
  },
  marks: {
    em: ({ children }) => <i>{children}</i>,
  },
};

type RichTextProps = {
  value: PortableTextBlock[];
};

export function RichText({ value }: RichTextProps) {
  return <PortableText value={value} components={components} />;
}
