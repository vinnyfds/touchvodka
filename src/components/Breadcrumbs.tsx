interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="border-b-2 border-black bg-white px-8 md:px-12 py-4 md:py-6">
      <div className="max-w-6xl mx-auto">
        <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-mono uppercase tracking-widest">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <a
                  href={item.href}
                  className="text-accent hover:text-black transition-colors hover:underline"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-accent font-bold">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className="text-black opacity-50">/</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
