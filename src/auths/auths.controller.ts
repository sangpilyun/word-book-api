import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { AuthsService } from './auths.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authsService.create(createAuthDto);
  }

  @Get()
  findName(@Query() query: any) {
    const name = query.name;

    if (name) {
      return this.authsService.findName(name);
    } else {
      return this.authsService.findAll();
    }
  }
  @Get()
  findAll() {
    return this.authsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authsService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authsService.remove(+id);
  }
}
