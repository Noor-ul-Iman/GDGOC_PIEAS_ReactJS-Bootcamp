import books from "./Book.mjs";
const bookswithhighrank=(books) =>{
    books.forEach(books => {
        if(books.Rating>4.5){
            console.log(books.Title);
        }
    });
};
console.log(`\nBooks titles with rating higher than 4.5.\n`);
bookswithhighrank(books);


const Genrefuction =(books)=>{
    const fictiongenre= books.filter(books=>books.Genre ==='Fiction');
    fictiongenre.forEach(books=> console.log(books.Title));
};
console.log(`\nBook titles with the genre “fiction”\n`);
Genrefuction(books);

const bookauthors= (books)=>{
   books.forEach(books => {
    console.log(books.Author);
   });
}
console.log(`\nAn array of book authors\n`);
bookauthors(books);


const bookdetails=(books)=>{
    books.forEach(({ Title, Author, Rating, Genre }) => {
        console.log(`Title: ${Title}, Author: ${Author}, Rating: ${Rating}, Genre: ${Genre}`);
    });
};
console.log(`\nArray of books and prints their details (title, author, rating, genre)\n`);

bookdetails(books);