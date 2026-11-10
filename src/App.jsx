import BookCard from './components/BookCard.jsx';

function App() {
  const books = [
    { title: 'The Alchemist', author: 'Paulo Coelho' },
    { title: 'Atomic Habits', author: 'James Clear' },
    { title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki' }
  ];

  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">MY LIBRARY</p>
        <h1>Explore Books</h1>
        <p className="subtitle">A small collection of books to get you started.</p>
      </header>

      <section className="book-grid" aria-label="Book collection">
        {books.map((book) => (
          <BookCard
            key={book.title}
            title={book.title}
            author={book.author}
          />
        ))}
      </section>
    </main>
  );
}

export default App;