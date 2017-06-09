export class Football {
	teams = [
		{id: 0, name: 'Jacksonville', qb: 'Allan'},
		{id: 1, name: 'Houston', qb: 'Lock'}
	];

	game = {
		id: 0,
		home: 0,
		away: 1,
		homeScore: 20,
		awayScore: 21
	}

	drives = [
		{
			game: 0,
			id: 0,
			offense: 0
		}
	];

	plays = [
		{
			team: 0,
			down: 1,
			isRun: false,
			completed: true,
			player: 'Hatcher',
			yards: 66,
			defPlay: null,
			defPlayer: null
		},
		{
			team: 0,
			down: 2,
			isRun: true,
			completed: null,
			player: 'Williams III',
			yards: 1,
			defPlay: null,
			defPlayer: null
		},
		{
			team: 1,
			down: 1,
			isRun: true,
			completed: null,
			player: 'Williams III',
			yards: 1,
			defPlay: null,
			defPlayer: null
		}
	];
}
