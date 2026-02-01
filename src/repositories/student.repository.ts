import StudentModel, { Student } from '../models/student.model';

export class StudentRepository {
    async create(data: Partial<Student>): Promise<Student> {
        return await StudentModel.create(data);
    }

    async findAll(
        search?: string,
        sortBy?: string,
        order: 'asc' | 'desc' = 'asc',
        page: number = 1,
        limit: number = 10
    ): Promise<{ students: Student[]; total: number }> {
        const query: any = {};
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ];
        }

        const sortOptions: any = {};
        if (sortBy) {
            sortOptions[sortBy] = order === 'asc' ? 1 : -1;
        } else {
            sortOptions.createdAt = -1;
        }

        const total = await StudentModel.countDocuments(query);
        const students = await StudentModel.find(query)
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(limit);

        return { students, total };
    }

    async findById(id: string): Promise<Student | null> {
        return await StudentModel.findById(id);
    }

    async update(id: string, data: Partial<Student>): Promise<Student | null> {
        return await StudentModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<boolean> {
        const result = await StudentModel.findByIdAndDelete(id);
        return !!result;
    }
}
