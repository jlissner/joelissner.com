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
		this.gameId = uuid();
		this.kickoff = true;
		this.startYard = 20;
		this.editGameDetails = true;
		this.drives = [];
		this.homeTeam = '';
		this.homeQb = '';
		this.awayTeam = '';
		this.awayQb = '';

		this.tempHomeTeam = '';
		this.tempHomeQb = '';
		this.tempAwayTeam = '';
		this.tempAwayQb = '';
	}

	toggleEditMode() {
		this.editGameDetails = !this.editGameDetails;
	}

	setKickoff(homeTeamKikedOff) {
		this.kickoff = homeTeamKikedOff;
	}

	addDrive(start, offense) {
		this.drives.push({
			start,
			offense,
			game: this.gameId,
			drive: uuid()
		});
	}

	cancelGameDetails() {
		this.tempHomeTeam = this.homeTeam;
		this.tempHomeQb = this.homeQb;
		this.tempAwayTeam = this.awayTeam;
		this.tempAwayQb = this.awayQb;
		//this.toggleEditMode();
	}

	saveGameDetails() {
		this.homeTeam = this.tempHomeTeam;
		this.homeQb = this.tempHomeQb;
		this.awayTeam = this.tempAwayTeam;
		this.awayQb = this.tempAwayQb;

		this.addDrive(20, true);
		//this.toggleEditMode();
	}
}
