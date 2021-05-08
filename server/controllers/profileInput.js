const handleProfileInput = (req, res, db) => {
    const {name, address, idNo, planeId} = req.body;
    if(!name || !address || !idNo || !planeId){
        return res.status(400).json('incorrect form submission');
    }
    
    db('person').returning('idno').insert({
            name: name,
            address: address,
            idno: idNo,
            planeid: planeId,
            date: new Date()
        }).then(response => {
            res.json(response[0]);
        })
}

module.exports = {
    handleProfileInput: handleProfileInput
};