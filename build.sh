cd Dashboard && npm i && npm run build && rm dist/index.html
cd ../Catalog  && npm i && npm run build && rm dist/index.html
cd ../Cart && npm i && npm run build && rm dist/index.html
cd ..
mkdir -p static/dashboard static/catalog static/cart && cp -a Dashboard/dist/* static/dashboard && cp -a Catalog/dist/* static/catalog && cp -a Cart/dist/* static/cart
cp root-html/index.html static
echo "Files that will be deployed"
find static
sed -i 's/http:\/\/localhost:7000/\/dashboard/g' static/index.html
sed -i 's/http:\/\/localhost:7001/\/catalog/g' static/index.html
sed -i 's/http:\/\/localhost:7002/\/cart/g' static/index.html
cp static/index.html static/200.html
echo "Files to deploy"
find static