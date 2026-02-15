import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto'
import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

@Injectable()
export class AuthService {
    private users: User[] = [];  /*--temporary in-memory store--*/

    // registration logic
    async register(createUserDto: CreateUserDto) {
        const { firstName, lastName, email, password } = createUserDto;
        const existing = this.users.find(u => u.email === email);
        if (existing) throw new BadRequestException('User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: User = {
            id: Date.now(),
            firstName,
            lastName,
            email,
            password: hashedPassword,
        };
        this.users.push(newUser);
        console.log('Current users:', this.users);
        return { mrssage: 'Registration successful' };

    }

    // login logic
    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const user = this.users.find(u => u.email === email);
        if (!user) throw new BadRequestException('User not found');

        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) throw new BadRequestException('Invalid Password');

        return { token: 'fake-jwt-token' };
    }
}
