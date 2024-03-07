/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yulcq8xyvfrqfht")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bfwzeloq",
    "name": "hands",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7r3elif3frf9sfz",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yulcq8xyvfrqfht")

  // remove
  collection.schema.removeField("bfwzeloq")

  return dao.saveCollection(collection)
})
