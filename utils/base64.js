export const fromBase64 = value => {
    const buff = new Buffer(value, 'base64');
    return buff.toString('ascii');
}