import React, { use } from 'react';
const booksPromise = fetch('/booksData.json'). then(res=>res.json())

const AllBooks = () => {
    const books=use(booksPromise)
    console.log(books);
    return (
        <div className='my-12 max-w-7xl mx-auto  '>
           <h2 className='font-bold text-3xl text-center'>Books</h2>
{books.map(book=>{
    return <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex items-center gap-2'>
        {book.tags.map(tag=> <div className="badge badge-success">{tag}</div>) }</div>
     <h2 className=' card-title font-bold text-xl'>{ book.bookName}</h2>
     
    
    <p className='font-semibold text-lg'>{book.author}</p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
})}
        </div>
    );
};

export default AllBooks;