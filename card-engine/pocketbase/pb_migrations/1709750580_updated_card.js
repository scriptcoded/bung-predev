/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e8l4s5oyc051gz3")

  collection.name = "cards"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ntul1rvg",
    "name": "card_type",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e8l4s5oyc051gz3")

  collection.name = "card"

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
