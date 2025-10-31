export async function isPublic(req, res, next) {
    if (req.user.isLoggedIn) {
        return res.json({
            status: 'error',
            msg: 'Šis rautas skirtas tik viešajam naudojimui',
        });
    }

    return next();
}