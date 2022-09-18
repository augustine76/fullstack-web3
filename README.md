# ReadMe

| Deployed Contract Address (mumbai) | 0xb51A17EbE74F9273121d9Fb278d1DA918Bdd46c0 |
| --- | --- |
| Subgraph Endpoint | https://api.thegraph.com/subgraphs/name/augustine76/blog-subgraph |

## Example .env.local

```bash
NEXT_PUBLIC_ENVIRONMENT="testnet" || "local"
NEXT_PUBLIC_POLY_URL=<Infura Mumbai Endpoint>
NEXT_PUBLIC_PROJECT_ID=<Infura IPFS Project ID>
NEXT_PUBLIC_PROJECT_SECRET=<Infura IPFS Project Secret>
NEXT_PUBLIC_PK=<private key>
```

## **Initializing** Subgraph

1. Install the Graph CLI

```bash
$ npm install -g @graphprotocol/graph-cli

# or

$ yarn global add @graphprotocol/graph-cli
```

1. Initialize using the deployed contract address

```bash
$ graph init --from-contract your-contract-address \
--network mumbai --contract-name Blog --index-events
```

1. Run `graph codegen`
2. Run `graph build`
3. Get Access Key from the Graph dashboard and then run `graph auth`
4. To deploy the subgraph, run `yarn deploy` from within the subgraph directory.
