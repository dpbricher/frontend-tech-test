# Currency Converter App

Implementation of currency converter

## Prerequisites

- [Docker Compose][]
- [exchangeratesapi] API key 

## Usage

Commands and files listed here should be run from/added to the same directory that this README file is located within.

- First install the 'node_modules' from the project; This can be done via the command `docker-compose run --rm dev yarn`
- Create an '.env.local' file and add your [exchangeratesapi] API key into it as the value of `VITE_API_KEY`, .i.e.:
```
VITE_API_KEY=your_api_key_here
```
- Run the dev server with `docker-compose up`, which will start a server listening on localhost:3000

## Issues

When using an [exchangeratesapi] API token from a free account the only base currency that works correctly is `EUR`; Any other currency causes the API to respond with a 'base_currency_restricted' message.


[Docker Compose]:   https://docs.docker.com/compose/
[exchangeratesapi]: https://exchangeratesapi.io/