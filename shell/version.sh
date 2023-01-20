npm run build
npm run docs
git add .
git commit -m 'publish'
npm publish --access public
git push --follow-tags