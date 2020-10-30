# demo.land :see_no_evil: :hear_no_evil: :speak_no_evil: :rage4: :skull:

## Start Website

Base domain host static html pages with prospective NodeJS app. However `/blog` is a _PHP_ driven _WordPress_ site.

### Nginx Config
```nginx
server {
        server_name www.demo.land;
        return 301 $scheme://demo.land$request_uri;
}

server {
        listen 80;
        listen [::]:80;
        server_name demo.land;
        return 301 https://$server_name$request_uri;
}

map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        include snippets/ssl-demo.land.conf;
        include snippets/ssl-params.conf;

        access_log /var/log/nginx/demoland_access.log;
        error_log /var/log/nginx/demoland_error.log;

        root /var/www/demoland/public_html;
        index index.html index.php;

        server_name demo.land www.demo.land;

        location = /favicon.ico {
                access_log     off;
                log_not_found  off;
        }

        location / {
                expires $expires;
                proxy_redirect                      off;
                proxy_set_header Host               $host;
                proxy_set_header X-Real-IP          $remote_addr;
                proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto  $scheme;
                proxy_read_timeout                  1m;
                proxy_connect_timeout               1m;
                proxy_pass                          http://127.0.0.1:3000; # Node.js instance address
        }

        location /blog {
                try_files $uri $uri/ /blog/index.php?query_string;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass 127.0.0.1:9000;

                add_header 'Access-Control-Allow-Origin' "$http_origin" always;
                add_header 'Access-Control-Allow-Credentials' 'true' always;
                add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
                add_header 'Access-Control-Allow-Headers' 'X-Key,X-Did,Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With' always;
        }
}

```

### PM2

```bash
# Add to processes
$ pm2 start ecosystem.config.js

# Save process list
$ pm2 save
```
