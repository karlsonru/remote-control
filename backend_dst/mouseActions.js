var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mouse, up, left, right, down } from '@nut-tree/nut-js';
export class MouseActions {
    up(num) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mouse.move(up(num));
        });
    }
    down(num) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mouse.move(down(num));
        });
    }
    left(num) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mouse.move(left(num));
        });
    }
    right(num) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mouse.move(right(num));
        });
    }
    getPosition() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield mouse.getPosition();
        });
    }
}
