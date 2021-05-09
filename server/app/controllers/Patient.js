const { validationResult, check } = require("express-validator");
module.exports = {
    getPatientsList: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                let error = errors.errors;
                return res.status(200).send({ status: 500, error });
            }
            const pageNumber = Number(req.query._page);
            const pageSize = Number(req.query._limit);
            const result = await db('person').find({})
                .skip((pageNumber - 1) * pageSize)
                .limit(pageSize)
                .lean();
            console.log('result ne', result);
            const total = await PatientDB.find({}).countDocuments();
            console.log('total', total);
            res.status(200).json({
                success: true,
                data: {
                    data: result,
                    total: total,
                },
            });
        } catch (error) {

        }
    }
}