# node-srv-rsrc-esm-bp

<br />

This ia a NodeJS Backend Server Boilerplate which works on ExpressJS. The Code is written using ECMAScript module format. This boilerplate can run standalone using any process manager (like [pm2](https://www.npmjs.com/package/pm2)) or it can also be deployed to AWS Lambda (or any other cloud) using the [serverless](https://www.npmjs.com/package/serverless) package.

<br />

## Table of Content
- [Starting the server locally](#starting-the-server-locally)
- [Deployment using a Process Manager](#deployment-using-a-process-manager)
- [Deployment with serverless](#deployment-with-serverless)
- [Deployment with serverless using scripts](#deployment-with-serverless-using-scripts)
- [Contributors](#contributors)
- [Resources](#resources)
- [License](#license)

<br />

## Starting the server locally
To start the server locally, simply run the following command:
```sh
npm run start:dev
```
*Note: This must be used only for development purpose and make sure your environment variables are updated in .env.development file.*

<br />

## Deployment using a Process Manager
### 1. Use one of the following options to set environment variables
* Set individual environment variable using the ```export``` command
* Create a ```.env.production``` file in project root and set ```NODE_ENV=production``` in environment
* Create a ```.env``` file in project root

### 2. Start the server using a Process Manager
```sh
cd /path/to/project/root
pm2 start "npm run start" --name "node-srv-rsrc-esm-bp"
```
*Note: Example has been shown using pm2 process manager. Any Process Manager can be used instead.*

<br />

## Deployment with serverless
To deploy the server as an AWS Lambda, following steps must be followed:
<br />

### 1. Install serverless dependencies in global scope
```sh
npm i -g serverless serverless-dotenv-plugin serverless-domain-manager serverless-aws-function-url-custom-domain serverless-deployment-bucket
```

### 2. Create a .env file in project root respective to the deployment  *(refer .env.development file)*

### 3. Create a parameters.yml file n project root respective to the deployment *(refer parameters-sample.yml file)*

### 4. Start deployment using serverless package
```sh
sls deploy
```

### 5. Deployed may also be removed using the following command
```sh
sls remove
```
*Note: parameters.yml file must match to that of the deployment.*

<br />

## Deployment with serverless using scripts
* Create a prod.env file just outside the project root
* Create a prod-parameters.yml file just outside the project root
* Create a shell script to automate deployment
  ```sh
  #  prod-deploy.sh
  cd /path/to/project/root
  cp ../prod.env ./.env
  cp ../prod-parameters.yml ./parameters.yml
  sls deploy
  ```
* Create a shell script to delete deployment
  ```sh
  # prod-remove.sh
  cd /path/to/project/root
  cp ../prod.env ./.env
  cp ../prod-parameters.yml ./parameters.yml
  sls remove
  ```
* Run *prod-deploy.sh* or *prod-remove.sh* file as required

<br />

## Contributors
<table>
  <tbody>
    <tr>
      <td align="center">
        <a href='https://github.com/ankitgandhi452'>
          <img src="https://avatars.githubusercontent.com/u/8692027?s=400&v=4" width="100px;" alt="Ankit Gandhi"/>
          <br />
          <sub><b>Ankit Gandhi</b></sub>
        </a>
      </td>
      <td align="center">
        <a href='https://github.com/agarwalmehul'>
          <img src="https://avatars.githubusercontent.com/u/8692023?s=400&v=4" width="100px;" alt="Mehul Agarwal"/>
          <br />
          <sub><b>Mehul Agarwal</b></sub>
        </a>
      </td>
    </tr>
  </tbody>
</table>

<br />

## Resources
* [express](https://www.npmjs.com/package/express)
* [@vendia/serverless-express](https://www.npmjs.com/package/@vendia/serverless-express)
* [@am92/api-logger](https://www.npmjs.com/package/@am92/api-logger)
* [@am92/express-utils](https://www.npmjs.com/package/@am92/express-utils)
* [@am92/node-http](https://www.npmjs.com/package/@am92/node-http)

<br />

## License
* [MIT](https://opensource.org/licenses/MIT)


<br />
<br />
