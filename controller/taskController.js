const taskController = {
    index: (req,res) => {
        res.render('index')
    },
    new: (req,res) => {
        res.render('create')
    },
    edit: (req,res) => {
        res.render('update')
    },
    notFound: (req,res) => {
        res.render('pnf')
    }
}

module.exports = taskController

