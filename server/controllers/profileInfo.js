const { attachPaginate } = require('knex-paginate');
attachPaginate();
const handleProfileInfo = (req, res, db) => {
    var pagination = {};
    pageSize = req.query._limit;
    pageNumber = req.query._page;
    db('person').count('* as count').first().then(res => {
        pagination._page = parseInt(pageNumber);
        pagination._limit = parseInt(pageSize);
        pagination._totalRows = parseInt(Math.ceil(res.count/pageSize));      
        console.log(pagination);  
    });



    db('person').select().paginate({
        perPage: pageSize,
        currentPage: pageNumber
    }).then(response => {

        res.status(200).json({
            success: true,
            data: response,
            pagination: pagination,
        });
    })
}

module.exports = {
    handleProfileInfor: handleProfileInfo
};