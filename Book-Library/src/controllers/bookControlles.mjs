import bookModel from "../models/bookModel.mjs";
const creatBook = async (req,res)=>{
    const data = req.body;
    const createdBooks = await bookModel.create(data)
    return res.send({Request_Add : createdBooks,Response: "Success: Status 201 Book added successfully"})
}

const findBooks = async (req,res)=> {
    const findBook = await bookModel.find();
    return res.send({method:"GET", Response:findBook, success:"Status 200 Array of books matching the search criteria"})
}

export  {creatBook, findBooks};