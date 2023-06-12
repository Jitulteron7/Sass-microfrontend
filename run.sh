#! /bin/bash

apps=("about" "auth" "catch" "container" "dashboard" "marketing")

for app in ${apps[@]}; do 
    echo " start $app"
    cd packages/$app
    npm run start &
    cd ../../
done 

wait 
 
