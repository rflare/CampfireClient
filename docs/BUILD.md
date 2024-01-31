# Build

## Quick Start

1. `git clone https://github.com/rusluck/BigRusClient.git`
    - Alternatively, you can use the submodule from [parent project](https://github.com/rusluck/BigRus.git)
2. `npm i`
3. Create a `.env` file and add the following variables
   - `CLIENT_LOCAL_PORT`
   - `SERVER_LOCAL_PORT`
4. Run the project
   - For dev: `npm run dev`
   - For build, run `npm run build`
     - For me, `http-server dist -p <client port> --proxy <server address>:<server port>`

Note: It will not work unless you setup the [server](https://github.com/rusluck/BigRusServer.git)