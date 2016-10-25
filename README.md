# vue-ssr

## QuickStart

#### mongodb

 - install
    ```shell
    $ brew install mongo
    ```
    
 - start service
    ```shell
    $ alias mongod = "mongod --config /usr/local/etc/mongod.conf"
    $ mongod
    ```
    
#### run

 - install dependencies
    ```shell
    $ npm install
    ```

 - build vue
    ```shell
    npm run dist
    ```

 - run
    ```shell
    $ npm run local /* read local dev config */
    $ npm run prod /* read online prod config */
    $ npm start /* read local dev config */
    $ open http://localhost:3000/demo.html
    ```

## Q&A

Please open an issue [here](https://github.com/willworks/vue-ssr/issues).

## License
MIT
