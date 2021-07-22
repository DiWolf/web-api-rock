export const ITEMDB2_LIST =
  "SELECT item_db2.id, item_db2.name_japanese, renewal.descripcion, renewal.imagen, item_db2.type, item_db2.view FROM item_db2, renewal WHERE item_db2.id = renewal.idNueva";
