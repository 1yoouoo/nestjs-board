import { Injectable } from '@nestjs/common';
import { BoardStatus } from './boards-status.enum';
import { CreateBoardDto } from './DTO/create-board.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardsRepository {
  constructor(
    @InjectRepository(Board)
    public db: Repository<Board>
  ) {}

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.db.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.db.save(board);

    return board;
  }
}
