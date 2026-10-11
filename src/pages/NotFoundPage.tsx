import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <main className="page-main">
      <section className="card">
        <h1 className="card__name">Page Not Found</h1>
        <p className="card__bio">The page you're looking for doesn't exist.</p>

        {/* Link instead of <a href> so the page doesn't reload */}
        <Link className="link-button" to="/">
          Back to Home
        </Link>
      </section>
    </main>
  );
}