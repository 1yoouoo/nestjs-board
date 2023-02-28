import { CreateBoardDto } from './DTO/create-board.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './boards.entity';
import { BoardsRepository } from './board.repository';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardsRepository) {}
  // async getAllBoards(): Promise<Board[]> {
  //   return this.boardRepository.db.find();
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
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
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find Board with id ${id}`);
  //   }
  //   return found;
  // }
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.db.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with ${id}`);
    }
  }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
