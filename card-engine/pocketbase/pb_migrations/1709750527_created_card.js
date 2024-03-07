/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e8l4s5oyc051gz3",
    "created": "2024-03-06 18:42:07.325Z",
    "updated": "2024-03-06 18:42:07.325Z",
    "name": "card",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ntul1rvg",
        "name": "card_id",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ddrz2nb0",
        "name": "position",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
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
  const collection = dao.findCollectionByNameOrId("e8l4s5oyc051gz3");

  return dao.deleteCollection(collection);
})
