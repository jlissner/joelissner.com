import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';

@inject(WebAPI)
export class App {
	constructor(api) {
		this.api = api;
	}

	configureRouter(config, router) {
		config.title = 'Joe Lissner';
		config.map([
			{ route: ['', 'about'],  moduleId: 'pages/about/about',   name: 'home',  title: 'About', nav: true, settings: { icon: 'home' }},
			{ route: 'showcase',  moduleId: 'pages/showcase/showcase.html',   name: 'showcase',  title: 'Showcase', nav: true},
			{ route: 'code',  moduleId: 'pages/code/code',   name: 'code',  title: 'Code', nav: true},
			{ route: 'contact',  moduleId: 'no-selection',   name: 'contact',  title: 'Contact', nav: true},
			{ route: 'football',  moduleId: 'pages/football/football',   name: 'football',  title: 'Football', nav: true},
			{ route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts'}
		]);

		this.router = router;
	}
}
