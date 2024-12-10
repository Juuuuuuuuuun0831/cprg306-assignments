import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Retrieves all items for a specific user from Firestore.
 * @param {string} userId - The user ID used to query the items subcollection.
 * @returns {Promise<Array<Object>>} - An array of items with their document ID and data.
 */
export async function getItems(userId) {
  try {
    const items = [];
    const itemsCollectionRef = collection(db, "users", userId, "items");

    const q = query(itemsCollectionRef);

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return items;
  } catch (error) {
    console.error("Error retrieving user items:", error);
    throw error; 
  }
}

/**
 * Adds a new item to a specific user's list of items in Firestore.
 * @param {string} userId - The user ID to identify the items subcollection.
 * @param {Object} item - The item data to add to Firestore.
 * @returns {Promise<string>} - The ID of the newly created document.
 */
export async function addItem(userId, item) {
  try {
    const itemsCollectionRef = collection(db, "users", userId, "items");

    const docRef = await addDoc(itemsCollectionRef, item);

    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error; 
  }
}
