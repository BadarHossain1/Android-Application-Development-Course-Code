class Book{
    name;
    author;
    title;

    display(){
        console.log(`The name is ${this.name}`);
        console.log(`The author is ${this.author}`);

    }



}

let book1 = new Book();

book1.name = "The Alchemist";
book1.author = "Paulo Coelho";
book1.display();