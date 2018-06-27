import { SafeUrl } from "@angular/platform-browser";

export class TripConfig {
    name: string;
    mainText: string;
    mainImgUrl: string | SafeUrl;
    price: number;
    prop: SectionConfig[];
}

export class SectionConfig {
    bigText: string;
    smallText: string;
    imgUrl: string | SafeUrl;
}