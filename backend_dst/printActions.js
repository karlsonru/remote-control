var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { screen, mouse, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';
export class PrintActions {
    print() {
        return __awaiter(this, void 0, void 0, function* () {
            const position = yield mouse.getPosition();
            const region = new Region(position.x, position.y, 200, 200);
            const image = yield screen.grabRegion(region);
            const jimp = new Jimp({
                data: image.data,
                width: image.width,
                height: image.height,
            });
            const base64img = (yield jimp.getBase64Async(Jimp.MIME_PNG)).split(',')[1];
            return base64img;
        });
    }
}
