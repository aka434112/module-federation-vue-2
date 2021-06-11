# Module Federation with Vue 2

This repository houses micro-frontends brought together using Module Federation (a Webpack 5 feature). Each micro-frontend is a Vue 2.x application and one micro-frontend (the dashboard) acts as a host while the remaining ones act as remotes. A remote generally exposea components and data which can be consumed by other micro-frontends. For more information on Module Federation, please visit: https://webpack.js.org/concepts/module-federation/

## Steps to access the application

Run each micro-frontend and visit localhost:7000 to access the application. 
Each micro-frontend can be accessed individually as well.
