import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { BoardsService } from './boards.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardStatus } from './boards-status.enum';
import { CreateBoardDto } from './DTO/create-board.dto';
import { Board } from './boards.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.BoardsService.getAllBoards();
  // }
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.BoardsService.createBoard(createBoardDto);
  // }
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(CreateBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  // @Get('/:id')
  // getBoardById(@Param('id') id: string) {
  //   return this.BoardsService.getBoardById(id);
  // }
  // @Delete(':id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.BoardsService.deleteBoard(id);
  // }
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus
  // ) {
  //   return this.BoardsService.updateBoardStatus(id, status);
  // }
}
