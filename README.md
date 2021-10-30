# copy-files-cli

Simple script to copy files to a backup directory.

## Usage

`npm run build` to transpile the script.

### From package root

`npm start -- -c <path to config.json>`

### From anywhere

`node PATH/TO/SCRIPT/build/index.js -c <path to config.json>`

### Developing

Optional: Run script using what's in the `example` directory:

- `cp example/config.example.json example/config.json`
- replace the paths in the file as indicated
- `npm run start-example`

`npm run start-dev` run once

`npm run start-watch` watch mode

## Configuration File

List the files as an array and backupDirectory in a .json config file:

```json
{
  "files": ["~/path/to/foo.txt", "~/different/path/to/bar.txt"],
  "backupDirectory": "/another/path/to/backups"
}
```

`'~'` is allowed as first character to designate HOME directory. Otherwise, all paths must be absolute.

`backupDirectory` must exist. It won't be created for you.

## Credit

Started with [node-cli-scaffold](https://github.com/williscool/node-cli-scaffold)
