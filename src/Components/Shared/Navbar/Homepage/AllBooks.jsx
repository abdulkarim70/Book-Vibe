import React, { use } from 'react';
import { FaRegStar } from 'react-icons/fa';
const booksPromise = fetch('/booksData.json'). then(res=>res.json())

const AllBooks = () => {
    const books=use(booksPromise)
    console.log(books);
    return (
        <div className='my-12 max-w-7xl mx-auto  '>
           <h2 className='font-bold text-3xl text-center'>Books</h2>
<div className='grid grid-cols-3 gap-6'>
    {books.map(book=>{
    return <div className="card bg-base-100  shadow-sm">
  <figure className='p-6 '>
    <img className='rounded-xl h-[250px]'
      src={book.image}
      alt={book.bookName} />
  </figure>
  <div className="card-body">
    <div className='flex items-center gap-2'>
        {book.tags.map(tag=> <div className="badge text-green-500 bg-green-100 font-bold ">{tag}</div>) }</div>
     <h2 className=' card-title font-bold text-xl'>{ book.bookName}</h2>
     
    
    <p className='font-semibold text-lg'>{book.author}</p>
  
    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
      <div className="font-semibold ">{book.category}</div>
      <div className="flex items-center gap-2">{book.rating}<FaRegStar/></div>
    </div>
  </div>
</div>
})}
</div>
        </div>
    );
};

export default AllBooks;