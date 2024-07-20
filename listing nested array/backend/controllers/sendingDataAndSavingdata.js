let data = [
  {
    id: 1,
    name: "alireza",
    parentId: 0,
    children: [],
  },
  {
    id: 2,
    name: "kurosh",
    parentId: 0,
    children: [
      {
        id: 3,
        name: "alireza",
        parentId: 2,
        children: null,
      },
      {
        id: 4,
        name: "mmd",
        parentId: 2,
        children: [
          {
            id: 5,
            name: "mahdi",
            parentId: 4,
            children: null,
          },
          {
            id: 6,
            name: "ali",
            parentId: 4,
            children: null,
          },
        ],
      },
    ],
  },
];

function sendigData(req, res, next) {
res.json(data);
}

function savingData(req, res, next) {
  console.log("saving data...");
  try {
    if (addChild(req.body, data)) {
      res.status(200).json({ message: "successfully added", updatedData: data });
      console.log(JSON.stringify(data, null, 2)); // log the updated data with formatting
    } else {
      res.status(400).json({ message: "parent not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "wrong entry data" });
  }
}


function addChild(newNode, data) {
console.log("add child function");
for (let node of data) {
  if (node.id === newNode.parentId) {
    if (!node.children) {
      node.children = [];
    }
    node.children.push(newNode);
    console.log("child added");
    return true;
  }
  if (node.children && node.children.length > 0) {
    if (addChild(newNode, node.children)) {
      return true; // Return true if the child is added in the recursion
    }
  }
}
return false; // Return false if the parent is not found
}

module.exports = { sendigData, savingData };
