import {bindable} from 'aurelia-framework';

export class Play {
	@bindable editMode = false;

	activate(data) {
		this.order = data.order;
		this.driveId = data.drive;
		this.playId = data.id;
		this.comp = data.comp;
		this.down = data.down;
		this.play = data.play;
		this.player = data.player;
		this.yardage = data.yardage;
		this.defPlay = data.defPlay;
		this.defPlayer = data.defPlayer;
	}

	savePlay(data) {
		this.playId = data.id;
		this.comp = data.comp;
		this.down = data.down;
		this.play = data.play;
		this.player = data.player;
		this.yardage = data.yardage;
		this.defPlay = data.defPlay;
		this.defPlayer = data.defPlayer;
	}
}
