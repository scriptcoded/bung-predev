/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yulcq8xyvfrqfht")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxolpngq",
    "name": "color",
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
  const collection = dao.findCollectionByNameOrId("yulcq8xyvfrqfht")

  // remove
  collection.schema.removeField("sxolpngq")

  return dao.saveCollection(collection)
})
