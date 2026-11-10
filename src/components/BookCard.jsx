function BookCard({ title, author }) {
  return (
    <article className="book-card">
      <div className="book-icon" aria-hidden="true">📖</div>
      <div className="book-info">
        <h2>{title}</h2>
        <p>by {author}</p>
      </div>
    </article>
  );
}

export default BookCard;