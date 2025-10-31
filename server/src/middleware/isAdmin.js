export async function isAdmin(req, res, next) {
    if (!req.user.isLoggedIn) {
        return res.json({
            status: 'error',
            msg: 'Šis rautas apsaugotas - pirmiausia prisijunkite',
        });
    }

    return next();
}