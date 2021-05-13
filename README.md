# Speccy Lint Action

Lint the an OpenAPI spec using [Speccy](https://github.com/wework/speccy)


## Usage

| input  | description |
| ------ | ----------- |
| `path` | path to the OpenAPI spec, default `api.yaml` |


## Example

```yaml
name: lint
on:
  push:
    branches:
      - main
  pull_request:
jobs:
  lint:
    name: lint
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: lint spec
        uses: contiamo/speccy-lint-action@main
        with:
          path: api.yaml
```