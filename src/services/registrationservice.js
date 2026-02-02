import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

/**
 * Save registration data to Firebase Firestore
 * @param {Object} data - Registration data with payment info
 * @returns {Promise<string>} - Document ID of saved registration
 */
export const saveRegistration = async (data) => {
  console.log("🔵 [REGISTRATION SERVICE] saveRegistration called");
  console.log("🔵 [REGISTRATION SERVICE] Data to save:", data);
  
  try {
    console.log("🔵 [REGISTRATION SERVICE] Adding document to 'registrations' collection...");
    const docRef = await addDoc(collection(db, "registrations"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("✅ [REGISTRATION SERVICE] Document added successfully with ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("❌ [REGISTRATION SERVICE] Error saving to Firebase:", error);
    console.error("❌ [REGISTRATION SERVICE] Error name:", error.name);
    console.error("❌ [REGISTRATION SERVICE] Error message:", error.message);
    console.error("❌ [REGISTRATION SERVICE] Error code:", error.code);
    throw error;
  }
};
