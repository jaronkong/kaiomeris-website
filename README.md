# kaiomeris-website
Website for KaioMeris

## Local Development
Use these commands in gitbash (powershell doesn't work)
```
./node_modules/next/dist/bin/next
```

## Auto Build
Push to the github repo to trigger a google cloud build job!

`https://console.cloud.google.com/cloud-build/dashboard?project=kaiomeris`

## Manual Export
```
./node_modules/next/dist/bin/next build
# Delete the "out" directory to make sure get a fresh export
./node_modules/next/dist/bin/next export
```
Then you need to upload the contents of the out directory to the google cloud bucket.

https://console.cloud.google.com/storage/browser/www.kaiomeris.com?forceOnBucketsSortingFiltering=false&project=kaiomeris