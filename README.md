Uhtred
======================

The frontend (React.js version) for [Marketr](https://sonataxa.tech).

Marketr is a product made for investors who need curated information regarding stock options assets
at the [BMF&Bovespa](http://www.bmfbovespa.com.br/pt_br/). Its board contains the most negotiated assets at the market
and brings all the needed information for trading, including a top-feature called "Rating". Ratings are
evaluated based on Artificial Intelligence and are the main purpose of this product because it achieves
transparency, speed and accuracy while choosing the best assets to invest money.

![Screen 1](screenshots/screen-1.png)

Cutting Edge Stack (As of October 15th 2017')
--------
  * ES6
  * Webpack 3.7
  * npm@5.5
  * React 16
  * Redux 3.7
  * Jest 21
  * Enzyme 3.1

Screenshots
-----------
![Screen 3](screenshots/screen-3.png)

It's even possible to train your data from the UI:

![Screen 4](screenshots/screen-4.png)

Setup & Running locally
--------
	$ npm install
	$ npm run build (webpack)
	$ npm run server:dev (webpack-dev-server --inline --hot)

Docker usage
--------
This app uses docker for containerization:

	# builds the web app container
	docker-compose build web

	# starts up and listens to http://localhost:8080
	docker-compose up web

	# running commands inside web container
	docker exec -it uhtred-web bash -c "curl http://localhost:8080"

	# happy TDD!
	docker-compose build tdd && docker-compose run tdd

	# stop everything
	docker-compose down

Testing
--------
	$ npm run tdd (jest --watch)
	$ docker-compose run tdd

Running under K8s
----------
This app provides capabilities for deployments  on K8s using Docker containers.

	# creates pods and services
	kubectl create -f k8s/k8s-app-pod.yml
	kubectl create -f k8s/k8s-app-service.yml

	# check dashboard using MiniKube
	minikube dashboard

	# print URL
	minikube service uhtred-service --url

License
------------
Uhtred is released under the [MIT License](https://opensource.org/licenses/MIT)
