import logo from './logo.svg';
import './App.css';

const Book = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
    </>
  )
}


// method 2:
// const GrandChildOne = (props) => {
//   return (
//     <>
//       <h1>{props.bookTitle}</h1>
//       <h1>{props.author}</h1>
//     </>
//   )
// }


// const ChildOne = (props) => {
//   return (
//     <h1>{props.bookTitle}</h1>
//   )
// }

// const ChildOneVersionTwo = (props) => {
//   return (
//     <>
//       <h1>{props.bookTitle}</h1>
//       <GrandChildOne
//         bookTitle={props.bookTitle}
//         author={props.author}
//       />
//     </>
//   )
// }


// method 3:
// const GrandChildOne = (props) => {
//   return (
//     <>
//       <h3>{props.bookTitle}</h3>
//       <h3>{props.author}</h3>
//     </>
//   )
// }


// const ChildOne = (props) => {
//   return (
//     <>
//       <h1>{props.bookTitle}</h1>
//       {props.author && <GrandChildOne bookTitle={props.bookTitle} author={props.author}/>}
//     </>
//   )
// }


// method 4:
// const Books = (props) => {
//   return (
//     <>
//       <h1>{props.bookTitle}</h1>
//       {props.author && <BooksWithAuthor bookTitle={props.bookTitle} author={props.author}/>}
//     {/* either or work */}
//       {/* {props.author ? <BooksWithAuthor bookTitle={props.bookTitle} author={props.author}/> : null} */}
//     </>
//   )
// }



function App() {
  return (
    <div className="App">
      <h1>Books</h1>

     <Book
        title="Harry Potter"
     />

      <Book
        title="Lord of the Rings"
     />

      <Book
        title="Game of Thrones"
        author="George R. R. Martin"
     />

    </div>
  );
}

export default App;
