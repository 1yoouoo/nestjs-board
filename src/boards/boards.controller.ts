import { BoardsService } from './boards.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private BoardsService: BoardsService) {}

  @Get('/')
  getAllBoard(): Board[] {
    return this.BoardsService.getAllBoards();
  }
  @Post()
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.BoardsService.createBoard(title, description);
  }
}
