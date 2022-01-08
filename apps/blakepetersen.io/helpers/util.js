const isDev = () => {
    return process.env.NODE_ENV !== 'production'
};

const isStatic = () => {
	return !process.env.NODE_ENV;
};

module.exports = {
    isDev,
    isStatic
};
