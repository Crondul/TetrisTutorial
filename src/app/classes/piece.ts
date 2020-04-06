export class Piece {
    private _image: string;
    private _position: Array<number>;

    constructor(image: string, position: Array<number>) {
        this._image = image;
        this._position = position
    }

    public get image() {
        return this._image;
    }

    public set image(image: string) {
        this._image = image;
    }

    public get position() {
        return this._position;
    }

    public set position(position: Array<number>) {
        this._position = position;
    }
}
