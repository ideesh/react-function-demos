function Book({book,index})
{
    function clickhandler()
    {
        alert("Hello young people")
    }

    return(
        <>
            <h1>{index}</h1>
           <h1>{book.name}</h1>
           <h1>{book.age}</h1>
           <button type="button" onClick={clickhandler}>click</button> 
        </>
    );
}


export default Book;
