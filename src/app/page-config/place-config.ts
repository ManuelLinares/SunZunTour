import { SafeUrl } from "@angular/platform-browser";

export class PlaceConfig {
    id: string;
    recomended: string;
    mainImgUrl: string | SafeUrl;
    cards: CardConfig[];
}

export class CardConfig {
    name: string;
    imgUrl: string | SafeUrl;
    text: string;
}