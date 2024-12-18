import supabase from "./subabase";

export async function getCategory() {
  let { data, error } = await supabase.from("category").select("*");
  if (error) {
    throw new Error("Data can't be loaded");
  }
  return data;
}

export async function getCategoryItem(category) {
  let { data, error } = await supabase
    .from("allitems")
    .select("*")
    .ilike("category", `${category}`);
  if (error) {
    throw new Error("Data can't be loaded");
  }
  return data;
}

export async function getNewArrival() {
  let { data, error } = await supabase
    .from("allitems")
    .select("*")
    .gte(
      "created_at",
      new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    );

  if (error) {
    throw new Error("Data can't be loaded");
  }

  return data;
}

export async function getFavorite() {
  let { data, error } = await supabase.from("favorite").select(`
    *,
    allitems!product_id(*)
  `);
  if (error) {
    throw new Error("Data can't be loaded");
  }

  return data;
}

export async function createFavoriteItem1(id) {
  const { data, error } = await supabase
    .from("favorite")
    .insert([{ product_id: id }]) //we can directly pass object if data base name is same with them
    .select();

  if (error) {
    console.error(error);
    // throw new Error("New Favorite could not be created");
  }
  return data;
}

export async function createFavoriteItem(id) {
  const productId = typeof id === "number" ? id : parseInt(id, 10);

  const { data, error } = await supabase
    .from("favorite")
    .insert([{ product_id: productId }]) // Passing as an object
    .select();

  if (error) {
    console.error(error);
    // throw new Error("New Favorite could not be created");
  }

  return data;
}

export async function deleteFavoriteApi(id) {
  // const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  const { data, error } = await supabase
    .from("favorite")
    .delete()
    .eq("product_id", id);

  if (error) {
    console.error(error);
    // throw new Error("favorite could not be deleted");
  }

  return data;
}

export async function createCartItem(cartItem) {
  const { data, error } = await supabase
    .from("cart")
    .insert([cartItem])
    .select();

  if (error) {
    console.error(error);
    // throw new Error("cart could not be deleted");
  }

  return data;
}

export async function getCart() {
  let { data, error } = await supabase.from("cart").select(`
    *,
    allitems!product_id(*)
  `);
  if (error) {
    throw new Error("Data can't be loaded");
  }

  return data;
}

export async function deleteCartApi(id) {
  // const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  const { data, error } = await supabase.from("cart").delete().eq("id", id);

  if (error) {
    console.error(error);
    // throw new Error("favorite could not be deleted");
  }

  return data;
}

export async function updateCartItem(editedData) {
  const { id, ...itemsToBeChanged } = editedData;
  console.log(itemsToBeChanged);

  const { data, error } = await supabase
    .from("cart")
    .update(itemsToBeChanged)
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
  }

  return data;
}
