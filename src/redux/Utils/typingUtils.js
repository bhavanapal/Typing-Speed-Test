export const calculateWPM = (userText, timeRemaining) => {
        const words = userText.trim().split(/\s+/).length;
        const minutes = (60 - timeRemaining) / 60;
        return Math.round(words / minutes);
      }
      
export const calculateCPM = (userText, timeRemaining) => {
        const characters = userText.trim().length;
        const minutes = (60 - timeRemaining) / 60;
        return Math.round(characters / minutes);
      }
      
export const calculateAccuracy = (typingText, userText) => {
        let correctCount = 0;
        for (let i = 0; i < userText.length; i++) {
          if (typingText[i] === userText[i]) {
            correctCount++;
          }
        }
        return Math.round((correctCount / typingText.length) * 100);
      }

      
    