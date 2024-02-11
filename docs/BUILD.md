# Build

## Quick Start

1. `git clone https://github.com/rflare/CampfireClient.git`
    - Alternatively, you can use the submodule from [parent project](https://github.com/rflare/CampfireApp.git)
2. `npm i`
3. Create a `.env` file and add the following variables
   - `CLIENT_LOCAL_PORT`
   - `SERVER_LOCAL_PORT`
4. Run the project
   - For dev: `scripts/dev.sh`
   - For build, run:
     - `npm run build`
     - `scripts/serve.sh`
       - This assumes you have `http-server` installed. If not, run `npm i -g http-server`

Note: It will not work unless you setup the [server](https://github.com/rflare/CampfireServer.git)
