import { BoardStatus } from './boards-status.enum';
import { CreateBoardDto } from './DTO/create-board.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './boards.entity';
import { BoardsRepository } from './board.repository';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardsRepository) {}

  createBoard(CreateBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(CreateBoardDto);
  }
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.db.findOne(id);

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.db.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with ${id}`);
    }
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.db.save(board);

    return board;
  }
}
