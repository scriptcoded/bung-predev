/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7r3elif3frf9sfz",
    "created": "2024-03-06 18:42:44.364Z",
    "updated": "2024-03-06 18:42:44.364Z",
    "name": "hands",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "djtr6kng",
        "name": "hand_type",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7r3elif3frf9sfz");

  return dao.deleteCollection(collection);
})
