type FooterProps = {
  year: number;
  name: string;
};

export function Footer({ year, name }: FooterProps) {
  return (
    <footer className="site-footer">
      <p>&copy; {year} {name}</p>
    </footer>
  );
}
