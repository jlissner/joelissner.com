import {bindable} from 'aurelia-framework';

export class Drive {
	@bindable editMode = false;

	constructor() {
		this.plays = [];
		this.comp = false;
		this.down = 1;
		this.play = '';
		this.player = '';
		this.yardage = 0;
		this.defPlay = '';
		this.defPlayer = '';
	}

	activate(data) {
		this.driveId = data.drive;
		this.game = data.game;
		this.offense = data.offense;
		this.start = data.start;
		this.end = data.end;
		this.points = data.points;
		this.plays = [];
	}

	setCompleted(isCompleted) {
		this.comp = isCompleted;
	}

	setDown(down) {
		this.down = down;
	}

	setOffense(homeTeamIsOffense) {
		this.offense = homeTeamIsOffense;
	}

	togglePlay() {
		this.play = this.play === 'R' ? '' : 'R';
	}

	addPlay(data) {
		this.plays.push({
			offense: data.offense,
			comp: data.comp,
			down: data.down,
			play: data.play,
			player: data.player,
			yardage: data.yardage,
			defPlay: data.defPlay,
			defPlayer: data.defPlayer
		});

		this.comp = false;
		this.down = (this.yardage > 10 || parseInt(this.down, 10) + 1 > 4) ? 1 : parseInt(this.down, 10) + 1;
		this.play = '';
		this.player = '';
		this.yardage = 0;
		this.defPlay = '';
		this.defPlayer = '';
	}
}
