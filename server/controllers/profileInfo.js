const handleProfileInfo = (req, res, db) => {

    db('person').select().then(response => {
        //console.log(response);
        res.status(200).json({
            success: true,
            data: response
        });
    })
}

module.exports = {
    handleProfileInfor: handleProfileInfo
};