import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
export declare class AutosService {
    create(createAutoDto: CreateAutoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAutoDto: UpdateAutoDto): string;
    remove(id: number): string;
}
