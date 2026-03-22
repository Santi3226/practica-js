pnpm init
agregar el type module
pnpm add -E express
pnpm add -D typescript@5.1.3
pnpm add -D tsc-watch@6.0.4
tsc --init => A mi no me funciono y lo cree a mano
crear carpeta src (donde va el cod fuente)
crear carpeta dist (donde van los compilados)

agregar en el package.json
"build": "tsc -p ./tsconfig.json",
"start:dev": "tsc-watch --noClear -p ./tsconfig.json --onSuccess \"node ./dist/index.js\""

Una vez esta todo esto en la terminal
pnpm build (para compilar)
pnpm start:dev (para que se vaya compilando cada vez q hago save)

Hay una manera de setear un archivo json para usar el debugger pero no lo pude hacer

---

pnpm add -E express
pnpm add -E -D typescript tsc-watch @type/express @type/node
