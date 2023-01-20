npm run build
npm run docs
git add .
echo < "\n\npublishing\n\n"
git commit -m 'publish'
npm publish --access public
git push --follow-tags