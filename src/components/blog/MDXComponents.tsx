import React from 'react';

interface MDXComponentProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

const MDXComponents = {
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 className="text-4xl md:text-5xl font-display uppercase tracking-tighter mb-6 border-b-4 border-accent pb-4 mt-8" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tighter mb-4 mt-6 border-l-4 border-accent pl-4" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="text-2xl font-display uppercase tracking-tight mb-3 mt-4" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="font-mono text-sm opacity-80 leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  a: ({ children, href, ...props }: MDXComponentProps) => (
    <a href={href} className="text-accent underline hover:no-underline" {...props}>
      {children}
    </a>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="font-mono text-sm opacity-80 list-disc list-inside mb-4 space-y-1" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="font-mono text-sm opacity-80 list-decimal list-inside mb-4 space-y-1" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="ml-2" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote className="border-l-4 border-accent pl-4 italic my-4 opacity-90" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: MDXComponentProps) => {
    const isInlineCode = !className;
    if (isInlineCode) {
      return (
        <code className="bg-black text-accent px-1 py-0.5 rounded border border-accent text-xs font-mono" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: MDXComponentProps) => (
    <pre className="bg-black border-4 border-black rounded overflow-x-auto p-4 my-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" {...props}>
      {children}
    </pre>
  ),
  img: ({ src, alt, ...props }: MDXComponentProps) => (
    <img
      src={src}
      alt={alt}
      className="w-full border-4 border-black rounded my-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
      {...props}
    />
  ),
  table: ({ children, ...props }: MDXComponentProps) => (
    <table className="w-full border-collapse border-4 border-black my-4" {...props}>
      {children}
    </table>
  ),
  th: ({ children, ...props }: MDXComponentProps) => (
    <th className="border-2 border-black bg-neutral-100 p-2 text-left font-display uppercase" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: MDXComponentProps) => (
    <td className="border-2 border-black p-2" {...props}>
      {children}
    </td>
  ),
  hr: (props: MDXComponentProps) => (
    <hr className="border-t-4 border-black my-8" {...props} />
  ),
};

export default MDXComponents;
