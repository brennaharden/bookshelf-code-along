let books = []
let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },
    create: (req, res) => {
        // const {title, author} = req.body
        books.push({
            id: id,
            title: req.body.title,
            author: req.body.author
        })
        id++
        res.status(200).send(books)
    },
    update: (req, res) => {
        const {id} = req.params
        const {title, author} = req.body
        let bookIndex = null
        books.forEach((elem, index) => {
            if(elem.id === +id){
                bookIndex = index
            }
        })
        const updatedBook = {
            id: +id,
            title,
            author
        }
        // let found = books.find(elem => elem.id === id)
        // found = {
        //     id,
        //     title,
        //     author: author
        // }
        books.splice(bookIndex, 1, updatedBook)
        res.status(200).send(books)
    },
    delete: (req, res) => {
        let bookIndex2 = null
        books.forEach((elem, i) => {
            if(elem.id === +req.params.id){
                bookIndex2 = i
            }
        })
        books.splice(bookIndex2, 1)
        res.status(200).send(books)
    }
}