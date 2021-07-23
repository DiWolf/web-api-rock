export const ITEMDB2_LIST =
  "SELECT item_db2.id, item_db2.name_japanese, renewal.descripcion, renewal.imagen, item_db2.type, item_db2.view FROM item_db2, renewal WHERE item_db2.id = renewal.idNueva";
export const ITEMDB2_LIST_WEAPONS =
  "SELECT item_db2.id,item_db2.name_english,item_db2.type,item_db2. VIEW AS class,item_db2.price_buy,item_db2.price_sell,item_db2.attack,item_db2.equip_level,item_db2.weapon_level,item_db2.slots,item_db2.refineable,renewal.descripcion,renewal.imagen FROM item_db2,renewal WHERE item_db2.type = ? AND item_db2.id = renewal.idNueva AND view = ? ORDER BY id DESC";
