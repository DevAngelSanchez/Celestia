interface NavLink {
  href: string;
  label: string;
}

export default function CategoryNavLink({ href, label }: NavLink) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center gap-1 text-black font-semibold text-sm border-b-2 hover:border-black transition-colors"
      >
        <span>{label}</span>
      </a>
    </li>
  );
}