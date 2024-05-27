const { PrismaClient } = require("@prisma/client");
const { response } = require("../herlpers/common");
const createHttpError = require("http-errors");
const prisma = new PrismaClient();

const getRecipes = async (req, res, next) => {
  try {
    const listSort = ["created_at", "title", "updated_at"];
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const sort = listSort.includes(req.query.sort)
      ? req.query.sort
      : "created_at";
    const sortBy = req.query.sortBy || "desc";
    const search = req.query.search || "";
    const offset = (page - 1) * limit;

    const recipes = await prisma.recipe.findMany({
      take: limit,
      skip: offset,
      ...(search
        ? {
            where: {
              title: {
                contains: search,
              },
            },
          }
        : {}),
    });
    response(res, recipes, 200, "get all recipe success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};

const getRecipesById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const recipe = await prisma.recipe.findFirst({
      include: {
        author: {
          select: {
            email: true,
            name: true,
            phone: true,
          },
        },
      },
      where: {
        id,
      },
    });
    response(res, recipe, 200, "get recipe by id success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};

const getAllMyRecipe = async (req, res, next) => {
  try {
    const email = req.decoded.email;
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    const myRecipe = await prisma.recipe.findMany({
      where: {
        author_id: user.id,
      },
    });
    response(res, myRecipe, 200, "get my recipe success");
  } catch (error) {}
};

const createRecipe = async (req, res, next) => {
  try {
    const email = req.decoded.email;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    const { title, description, image } = req.body;
    const recipe = await prisma.recipe.create({
      data: {
        title,
        description,
        image,
        author_id: user.id,
      },
    });
    response(res, recipe, 201, "add recipe success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};

const updateRecipe = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description, image } = req.body;

    const recipe = await prisma.recipe.update({
      data: {
        title,
        description,
        image,
        updated_at: new Date(),
      },
      where: {
        id,
      },
    });
    response(res, recipe, 200, "update recipe success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};

const deleteRecipe = async (req, res, next) => {
  try {
    const id = req.params.id;
    const recipe = await prisma.recipe.delete({
      where: {
        id,
      },
    });
    response(res, recipe, 200, "delete recipe success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};

module.exports = {
  getRecipes,
  getRecipesById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getAllMyRecipe,
};
