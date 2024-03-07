/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yulcq8xyvfrqfht",
    "created": "2024-03-06 18:38:34.336Z",
    "updated": "2024-03-06 18:38:34.336Z",
    "name": "game_players",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sri4mhs1",
        "name": "name",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("yulcq8xyvfrqfht");

  return dao.deleteCollection(collection);
})
