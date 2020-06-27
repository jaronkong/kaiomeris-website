# kaiomeris-website
Website for KaioMeris

Use these commands in gitbash (powershell doesn't work)
```
./node_modules/next/dist/bin/next
```

Export
```
./node_modules/next/dist/bin/next build
# Delete the "out" directory to make sure get a fresh export
./node_modules/next/dist/bin/next export
```
Then you need to upload the contents of the out directory to the google cloud bucket.

https://console.cloud.google.com/storage/browser/www.kaiomeris.com?forceOnBucketsSortingFiltering=false&project=kaiomeris