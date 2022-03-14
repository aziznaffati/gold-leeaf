const User = require("../model/User");
const Comment = require("../model/Comment");

module.exports.get_comment_items = async (req, res) => {
  const productId = req.params.id;
  try {
    let comment = await Comment.findOne({ productId });
    if (comment && comment.items.length > 0) {
      res.send(comment);
    } else {
      res.send(null);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
module.exports.add_comment_item = async (req, res) => {
  const productId = req.params.id;

  const { userId, FirstNameUser, LastNameUser, Description } = req.body;

  try {
    let comment = await Comment.findOne({ productId });

    let item = await User.findOne({ _id: userId });

    if (!item) {
      res.status(404).send("Item not found!");
    }
    const FirstNameUser = item.FirstName;

    const LastNameUser = item.LastName;

    if (comment) {
      // if cart exists for the user
      let itemIndex = comment.items.findIndex((p) => p.userId == userId);

      // Check if product exists or not
      if (itemIndex > -1) {
        let commentItem = comment.items[itemIndex];
        comment.items[itemIndex] = comment;
      } else {
        comment.items.push({
          userId,
          FirstNameUser,
          LastNameUser,
          Description,
        });
      }

      comment = await comment.save();
      return res.status(201).send(comment);
    } else {
      // no cart exists, create one
      const newComment = await Comment.create({
        productId,
        items: [{ userId, FirstNameUser, LastNameUser, Description }],
      });
      return res.status(201).send(newComment);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
module.exports.delete_item = async (req, res) => {
  const productId = req.params.productId;
  const userId = req.params.userId;

  try {
    let comment = await Comment.findOne({ productId });
    let itemIndex = comment.items.findIndex((p) => p.userId == userId);
    if (itemIndex > -1) {
      let productItem = comment.items[itemIndex];

      comment.items.splice(itemIndex, 1);
    }
    comment = await comment.save();
    return res.status(201).send(comment);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
module.exports.getComments = async (req, res) => {
  try {
    const listComments = await Comment.find();
    res
      .status(200)
      .send({ msg: "This is the list of comment .....", listComments });
  } catch (error) {
    res.status(400).send({ msg: " Can not get all  comment !!! ", error });
  }
};
module.exports.update_item = async (req, res) => {
  const productId = req.params.productId;
  const userId = req.params.userId;
  const newComment = req.body;

  try {
    let comment = await Comment.findOne({ productId });
    let itemIndex = comment.items.findIndex((p) => p.userId == userId);

    if (itemIndex > -1) {
      let productItem = comment.items[itemIndex];
      console.log(productItem);
      comment.items.splice(itemIndex, 1);
    }
    comment = await comment.save();
    return res.status(201).send(comment);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};
