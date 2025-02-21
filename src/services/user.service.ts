import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUserById = async (userId: number) => {
    return prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            firstName: true,
            lastName: true,
            username: true,
            bio: true,
            avatarUrl: true,
            phoneNumber: true,
            location: true,
            language: true,
            timezone: true,
            themePreference: true,
            lastLoginAt: true,
            isActive: true,
            role: true,
        }
    });
};
