# Vist [![Build Status](https://img.shields.io/circleci/project/vist-service/vist/master.svg)](https://circleci.com/gh/vist-service/vist)

Open-source web client for GitHub Gist, made with Vue.

## Development

### API

First, you need to run Vist API locally for logining with GitHub.

```bash
# you need `rolling` installed first
$ npm install -g rolling

$ git clone https://github.com/vist-service/api.git vist-api
$ cd vist-api
$ npm install

# rename .env-sample to .env
# register a github oauth application
# or ask me for one
# then update .env it with your app id and secret

$ npm run dev
```

API server is only needed when you wanna login with GitHub.

### Client (This repo)

```bash
# you need `vbuild` installed first
$ npm install -g vbuild

$ git clone https://github.com/vist-service/vist.git
$ cd vist
$ npm run dev
```

### Publish

We use CircleCI and Surge.sh to publish website.

## License

MIT &copy; [EGOIST](https://github.com/egoist)
