import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UpdateProfileData {
    firstName?: string;
    lastName?: string;
    username?: string;
    bio?: string;
    avatarUrl?: string;
    phoneNumber?: string;
    location?: string;
    language?: string;
    timezone?: string;
    themePreference?: string;
}

export const updateProfile = async (userId: number, profileData: UpdateProfileData) => {
    return prisma.user.update({
        where: { id: userId },
        data: profileData,
        select: {
            id: true,
            firstName: true,
            lastName: true,
            username: true,
            bio: true,
            avatarUrl: true,
            phoneNumber: true,
            location: true,
            email: true,
            language: true,
            timezone: true,
            themePreference: true,
            createdAt: true,
            updatedAt: true,
            lastLoginAt: true,
            isActive: true,
            role: true,
        },
    });
};
