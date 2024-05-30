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
      orderBy: {
        [sort]: sortBy,
      },
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

const getAllSaveRecipe = async (req, res, next) => {
  try {
    const email = req.decoded.email;
    const recipe = await prisma.save.findMany({
      select:{
        id: true,
        recipe_id: true,
        recipe:{
          select:{
            id: true,
            title: true,
            description:true,
            image: true,
            author_id: true,
            created_at: true,
            updated_at: true,
            author:{
              select:{
                name: true,
              }
            }
          }
        }
      },
      where: {
        user: {
          email: email,
        },
      },
    });
    response(res, recipe, 200, "get all save recipe success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};

const saveRecipe = async (req, res, next) => {
  try {
    const { recipe_id } = req.body;
    const email = req.decoded.email;
    
    const saveRecipe = await prisma.save.findFirst({
      where:{
        recipe_id,
        user:{
          email,
        }
      }
    })
    if(saveRecipe){
      return  response(res, null, 401, "you've already save it ");
    }
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    const recipe = await prisma.save.create({
      data: {
        recipe_id,
        user_id: user.id,
      },
    });
    response(res, recipe, 201, "save recipe success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};
const removeRecipeSave = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await prisma.save.delete({
      where: {
        id,
      }
    });
    response(res, result, 201, "remove save recipe success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};

const getAllLikeRecipe = async (req, res, next) => {
  try {
    const email = req.decoded.email;
    const recipe = await prisma.like.findMany({
      select:{
        id: true,
        recipe_id: true,
        recipe:{
          select:{
            id: true,
            title: true,
            description:true,
            image: true,
            author_id: true,
            created_at: true,
            updated_at: true,
            author:{
              select:{
                name: true,
              }
            }
          }
        }
      },
      where: {
        user: {
          email: email,
        },
      },
    });
    response(res, recipe, 200, "get all like recipe success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};

const likeRecipe = async (req, res, next) => {
  try {
    const { recipe_id } = req.body;
    const email = req.decoded.email;
    const likeRecipe = await prisma.like.findFirst({
      where:{
        recipe_id,
        user:{
          email,
        }
      }
    })
    if(likeRecipe){
      return  response(res, null, 401, "you've already liked it ");
    }
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    const recipe = await prisma.like.create({
      data: {
        recipe_id,
        user_id: user.id,
      },
    });
    response(res, recipe, 201, "like recipe success");
  } catch (error) {
    console.log(error);
    next(new createHttpError.InternalServerError());
  }
};
const removeRecipeLike = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await prisma.like.delete({
      where: {
        id,
      }
    });
    response(res, result, 201, "remove like recipe success");
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
  getAllSaveRecipe,
  saveRecipe,
  removeRecipeSave,
  getAllLikeRecipe,
  likeRecipe,
  removeRecipeLike
};
