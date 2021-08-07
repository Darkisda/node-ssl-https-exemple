# Simple exemple SSL HTTPS NodeJS Server


### Generate SSL certificate in Ubuntu
```bash
$ sudo apt-get install libssl-dev
$ openssl req -nodes -new -x509 -keyout ssl.key -out key.cert
```