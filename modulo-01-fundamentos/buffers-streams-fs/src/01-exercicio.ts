import { Buffer } from "node:buffer";

const bufString = Buffer.from('I love Java', 'utf-8')

bufString.write('Node', 7, 'utf-8')

console.log(bufString.toString())