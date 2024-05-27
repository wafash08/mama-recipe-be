const { PrismaClient } = require("@prisma/client");
const { response } = require("../herlpers/common");
const createHttpError = require("http-errors");
const prisma = new PrismaClient();

const profile = async(req, res, next)=>{
    try {
        const email = req.decoded.email 
        const user = await prisma.user.findFirst({
            where:{
                email: email
            }
        })
        if(!user){
            next(createHttpError(403, 'User invalid'))
        }
        delete user.password
        response(res, user, 200, "get profile success");

    } catch (error) {
        console.log(error);
        next(new createHttpError.InternalServerError());
    }
}

module.exports = {
    profile
}