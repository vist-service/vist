# Vist

Open-source web client for GitHub Gist, made with Vue.

## Development

### API

First, you need to run Vist API locally for logining with GitHub.

```bash
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
# you need vbuild installed first
$ npm install -g vbuild

$ git clone https://github.com/vist-service/vist.git
$ cd vist
$ npm run dev
```

### Publish

Register surge.sh and give me your account email.

Once you are granted the permission to access our surge team, use following command to publish:

```bash
$ npm run publish:surge
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)