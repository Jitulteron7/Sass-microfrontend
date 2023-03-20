#! /bin/bash

apps=("about" "auth" "catch" "container" "dashboard" "marketing")

for app in ${apps[@]}; do 
    echo "install $app"
    cd packages/$app && npm install && cd ../../
done 


