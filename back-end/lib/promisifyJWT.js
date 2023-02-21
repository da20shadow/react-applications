import util from 'util';
import jwtCallBack from 'jsonwebtoken';

export const jwt = {
    sign: util.promisify(jwtCallBack.sign),
    verify: util.promisify(jwtCallBack.verify)
}