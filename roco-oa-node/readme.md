另一套配置，但是在typeorm中不能通过编译

nodemon.json    "ts": "node --loader ts-node/esm"
package.json    "type": "module",
tsconfig.json   "module": "esnext"