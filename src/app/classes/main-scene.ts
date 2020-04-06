import Phaser from 'phaser';
import { Piece } from './piece';

export class MainScene extends Phaser.Scene {
    mainPiece: Piece;
    cursors: any;
    piece: any;

    constructor() {
        super({ key: 'main' });
        this.mainPiece = new Piece('assets/Game Assets/T/T.png', [100, 600]);
    }
    create() {
        this.add.image(192, 313, 'background');
        this.piece = this.physics.add.sprite(this.mainPiece.position[0], this.mainPiece.position[1], 'mainPiece');
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    preload() {
        this.load.image('background', 'assets/Game Assets/Mockup/background.jpg');
        this.load.image('mainPiece', this.mainPiece.image);
    }
    update() {
        this.cursors.right.onDown.add(function() {
            console.log(arguments);
        });
    }
}
