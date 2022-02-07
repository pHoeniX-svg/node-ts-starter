import add from '@src/math/add';
import dotenv from 'dotenv-safe';

dotenv.config();

console.log(process.env.SECRET);

console.log(add(1, 6));

console.log('hello');
