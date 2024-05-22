import Book from "../Modal/Book_Modal.js";
export const  getBook=async(req,res)=>{
    try {
        const book=await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.error("error",error)
        res.status(500).json(error)
    }
}