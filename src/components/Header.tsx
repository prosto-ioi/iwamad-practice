type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <header className="site-header">
      <p>{title}</p>
    </header>
  );
}
