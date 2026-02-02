import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

/**
 * Save registration data to Firebase Firestore
 * @param {Object} data - Registration data with payment info
 * @returns {Promise<string>} - Document ID of saved registration
 */
export const saveRegistration = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "registrations"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving to Firebase:", error);
    throw error;
  }
};
