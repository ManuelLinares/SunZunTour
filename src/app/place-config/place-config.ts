export class PlaceConfig {
    id: string;
    recomended: string;
    mainImgUrl: string;
    cards: CardConfig[];
}

export class CardConfig {
    name: string;
    imgUrl: string;
    text: string;
}