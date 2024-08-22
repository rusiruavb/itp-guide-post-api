export const createPost = async (prisma, data) => {
  return prisma.post.create({
    data,
  });
};

export const getPost = async (prisma, id) => {
  return prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  });
};

export const getPosts = async (prisma) => {
  return prisma.post.findMany({
    include: {
      user: true,
    },
  });
};

export const updatePost = async (prisma, id, data) => {
  return prisma.post.update({
    where: {
      id,
    },
    data,
  });
};

export const deletePost = async (prisma, id) => {
  return prisma.post.delete({
    where: {
      id,
    },
  });
};
