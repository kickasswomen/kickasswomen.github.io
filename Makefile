NAME=kick-ass-women
VERSION=0.0.1

.PHONY: install build

all: install build

install:
	yarn install

build:
	yarn build

deploy:
	git checkout master && \
	git reset --hard build && \
	mv docs/* . && \
	node build-pages.js && \
	git add -A && \
	git commit -am "`date +'%y/%m/%d'` deployment" && \
	git push -f && \
	git checkout build
