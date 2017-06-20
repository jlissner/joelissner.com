import $ from 'jquery';

/* eslint-disable */
function uuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});
}
/* eslint-enable */

export class Football {
	constructor() {
		this.editGameDetails = true;
		this.game = uuid();
		this.offense = true;
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

	toggleOffense() {
		this.down = 1;
		this.offense = !this.offense;
	}

	togglePlay() {
		this.play = this.play === 'R' ? '' : 'R';
	}

	setCompleted(isCompleted) {
		this.comp = isCompleted;
	}

	setDown(down) {
		this.down = down;
	}

	validateYardage(e) {
		const $this = $(e.target);
		const val = parseInt($this.val(), 10);

		if (isNaN(val)) {
			$this.val(0);
		} else if (val < -100) {
			$this.val(-99);
		} else if (val > 120) {
			$this.val(99);
		} else {
			$this.val(val);
		}
	}

	addPlay() {
		this.plays.push({
			game: this.game,
			offense: this.offense,
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
