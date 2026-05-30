const whitelist = process.env.IP_WHITELIST
    ? process.env.IP_WHITELIST.split(',')
    : [];

const blacklist = process.env.IP_BLACKLIST
    ? process.env.IP_BLACKLIST.split(',')
    : [];

export const ipFilter = (req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;

    if (blacklist.includes(ip)) {
        return res.status(403).json({ message: 'Acceso denegado' });
    }

    if (whitelist.length > 0 && !whitelist.includes(ip)) {
        return res.status(403).json({ message: 'IP no autorizada' });
    }

    next();
};
