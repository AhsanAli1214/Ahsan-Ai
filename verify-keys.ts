import { runWithRotation } from './src/ai/gemini-rotation';
import dotenv from 'dotenv';
dotenv.config();

async function verifyAllKeys() {
  console.log('--- Starting API Key Verification ---');
  for (let i = 0; i < 6; i++) {
    try {
      console.log(`Verifying Key ${i + 1}...`);
      // We force rotation by calling it repeatedly and checking logs
      const result = await runWithRotation('VERIFY_API_KEY');
      console.log(`Key ${i + 1} Result: ${result}`);
    } catch (error: any) {
      console.error(`Key ${i + 1} Failed: ${error.message}`);
    }
  }
  console.log('--- Verification Complete ---');
}

verifyAllKeys();
