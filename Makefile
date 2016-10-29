gh-pages:
	git checkout gh-pages
	git merge master
	npm run build
	cp dist/* .
	git add . && git commit -m "Update github pages"
	git push origin gh-pages
	git checkout master
