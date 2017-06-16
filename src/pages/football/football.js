export class Football {
	constructor() {
		this.editGameDetails = true;
		this.game = {};
		this.drives = [];
		this.plays = [];
		this.comp = false;
		this.down = 1;
		this.play = '';
		this.player = '';
		this.yardage = 0;
		this.defPlay = '';
		this.defPlayer = '';
	}

	toggleEditMode() {
		this.editGameDetails = !this.editGameDetails;
	}

	addPlay() {
		this.plays.push({
			comp: this.comp,
			down: this.down,
			play: this.play,
			player: this.player,
			yardage: this.yardage,
			defPlay: this.defPlay,
			defPlayer: this.defPlayer
		});

		this.comp = false;
		this.down = (this.yardage > 10 || parseInt(this.down, 10) + 1 > 4) ? 1 : parseInt(this.down, 10) + 1;
		this.play = '';
		this.player = '';
		this.yardage = 0;
		this.defPlay = '';
		this.defPlayer = '';
	}

	teams = [
		{id: 10, name: 'Jacksonville', qb: 'Allan'},
		{id: 3, name: 'Houston', qb: 'Lock'}
	];

	game = {
		id: 0,
		home: 10,
		away: 3,
		homeScore: 20,
		awayScore: 21
	}

	drives = [
		{
			game: 0,
			id: 0,
			offense: true // true for home team, false for away team
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
