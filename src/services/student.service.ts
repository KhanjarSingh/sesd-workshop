import { StudentRepository } from '../repositories/student.repository';
import { Student } from '../models/student.model';

export class StudentService {
    private repository: StudentRepository;

    constructor() {
        this.repository = new StudentRepository();
    }

    async createStudent(data: Partial<Student>): Promise<Student> {
        return this.repository.create(data);
    }

    async getAllStudents(
        search?: string,
        sortBy?: string,
        order: 'asc' | 'desc' = 'asc',
        page: number = 1,
        limit: number = 10
    ) {
        return this.repository.findAll(search, sortBy, order, page, limit);
    }

    async getStudentById(id: string): Promise<Student | null> {
        return this.repository.findById(id);
    }

    async updateStudent(id: string, updates: Partial<Student>): Promise<Student | null> {
        return this.repository.update(id, updates);
    }

    async deleteStudent(id: string): Promise<boolean> {
        return this.repository.delete(id);
    }
}
