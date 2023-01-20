npm run build
npm run docs
git add .
echo < "publishing"
git commit -m 'publish'
npm publish --access public
git push --follow-tags