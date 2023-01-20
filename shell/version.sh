set -e
npm run build
npm run docs
git add .
printf "\n\npublishing\n\n"
git commit -m 'publish'
npm publish --access public
git push --follow-tags
