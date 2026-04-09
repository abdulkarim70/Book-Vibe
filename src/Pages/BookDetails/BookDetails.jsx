import { useLoaderData, useParams } from 'react-router';
const booksPromise = fetch('/booksData.json'). then(res=>res.json())
const BookDetails = () => {
    const {bookId}=useParams()
    // console.log(params);
    // const books=use(booksPromise)
    // console.log(books);
    const books=useLoaderData()
    console.log(books);
    const expectedBook= books.find(book=>book.bookId===Number(bookId))
    console.log('expected book', expectedBook);
    const {bookId:id, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing}=expectedBook
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Album" className='h-[400px]' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl ">{bookName}</h2>
    <h2 className="card-title">by:{author}</h2>
   <p className='py-4 border-y'>{category}</p>
    <p>Review:{review}</p>
   <div className='flex items-center gap-2'>
        {tags.map(tag=> <div className="badge text-green-500 bg-green-100 font-bold ">{tag}</div>) }</div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;