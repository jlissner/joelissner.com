export class Play {
	activate(data) {
		this.game = data.game;
		this.offense = data.offense;
		this.comp = data.comp;
		this.down = data.down;
		this.play = data.play;
		this.player = data.player;
		this.yardage = data.yardage;
		this.defPlay = data.defPlay;
		this.defPlayer = data.defPlayer;
	}
}
