console.log(" {{36 tutorial}} This is tutorial 32- solution");
/* 

1. Create a class library and implement the following:
2. constructor must be take the book list as an argument
3. getBookList()
IssuBook (bookNam, user)
4. returnBook(bookName)

*/
class library {
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
            
        });

    }

    issueBook(bookname,user){
       if(this.issuedBook[bookname] == undefined){
          this.issuedBooks[bookname] = user;
       } else{
           console.log("This book is already issued");
       }
    }

    returnBook(bookname){
       delete this.issuedBooks[bookname];
    }
}

