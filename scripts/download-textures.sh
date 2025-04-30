#!/bin/bash

# Create textures directory if it doesn't exist
mkdir -p public/textures
 
# Download Earth textures
curl -o public/textures/earth_daymap.jpg https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg
curl -o public/textures/earth_clouds.jpg https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png
curl -o public/textures/earth_normal_map.jpg https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg
curl -o public/textures/earth_specular_map.jpg https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg 