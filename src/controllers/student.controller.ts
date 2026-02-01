import { Request, Response, NextFunction } from 'express';
import { StudentService } from '../services/student.service';

const studentService = new StudentService();

export class StudentController {

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const student = await studentService.createStudent(req.body);
            res.status(201).json(student);
        } catch (error) {
            next(error);
        }
    }

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { search, sortBy, order, page, limit } = req.query;
            const result = await studentService.getAllStudents(
                search as string,
                sortBy as string,
                (order as 'asc' | 'desc') || 'asc',
                parseInt(page as string) || 1,
                parseInt(limit as string) || 10
            );
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req: Request, res: Response, next: NextFunction) {
        try {
            const student = await studentService.getStudentById(req.params.id);
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.json(student);
        } catch (error) {
            next(error);
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const student = await studentService.updateStudent(req.params.id, req.body);
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.json(student);
        } catch (error) {
            next(error);
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const success = await studentService.deleteStudent(req.params.id);
            if (!success) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
