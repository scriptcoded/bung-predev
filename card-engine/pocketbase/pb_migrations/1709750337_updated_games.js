/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7t60p71ahk1w22u")

  // remove
  collection.schema.removeField("dq8fy3f9")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gratub1i",
    "name": "players",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yulcq8xyvfrqfht",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7t60p71ahk1w22u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dq8fy3f9",
    "name": "players",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("gratub1i")

  return dao.saveCollection(collection)
})
