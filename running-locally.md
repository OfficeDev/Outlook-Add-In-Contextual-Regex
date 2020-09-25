# Running the add-in locally

As an alternative to using a web server to test this add-in, you can follow these steps to run the add-in locally.

## Prerequisites

- [Node.js](https://nodejs.org/) with the NPM package manager
- PEM-encoded public and private keys suitable for protecting websites. The certificate MUST have a subject of `localhost`. This repository includes both a public and private key you can use for testing (located in the **certs** directory), but feel free to generate your own.

## Trust the certificates

Because the certificates used for running the add-in locally are self-signed, you must add them as a trusted root certificate in order for Outlook to load the add-in. Instructions for how to do this can be found here:

[Adding Self-Signed Certificates as Trusted Root Certificate](https://github.com/OfficeDev/generator-office/blob/master/src/docs/ssl.md)

## Install the command line server

1. Open your command prompt/shell in the root of this project.
1. Run the following command to install the [http-server](https://www.npmjs.com/package/http-server) package globally:

    ```
    npm install http-server -g
    ```

## Starting the web server

1. Run the following command to start the local web server:

    ```
    http-server --ssl --cert ./certs/localhost.crt --key ./certs/localhost.key -c-1
    ```

    > **Note:** If you are using your own public and private keys instead of the ones included in this repository, be sure to adjust the `--cert` and `--key` parameters accordingly.