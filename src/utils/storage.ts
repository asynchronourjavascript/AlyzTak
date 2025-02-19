import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ConversationStarter {
  id: string;
  text: string;
  context: string;
  createdAt: string;
}

export interface PickupLine {
  id: string;
  text: string;
  type: 'funny' | 'clever' | 'flirty';
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

export interface ChatHistory {
  id: string;
  messages: ChatMessage[];
  createdAt: string;
}

export interface UserSettings {
  theme: 'light' | 'dark';
  responseStyle: 'formal' | 'casual' | 'witty';
}

const STORAGE_KEYS = {
  FAVORITES: '@alyztalk_favorites',
  HISTORY: '@alyztalk_history',
  SETTINGS: '@alyztalk_settings',
};

export const storage = {
  async getFavorites() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : {
        conversationStarters: [],
        pickupLines: [],
        responses: [],
      };
    } catch (error) {
      console.error('Error getting favorites:', error);
      return {
        conversationStarters: [],
        pickupLines: [],
        responses: [],
      };
    }
  },

  async saveFavorites(favorites: any) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  },

  async getHistory() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.HISTORY);
      return data ? JSON.parse(data) : {
        chats: [],
        scenarios: [],
      };
    } catch (error) {
      console.error('Error getting history:', error);
      return {
        chats: [],
        scenarios: [],
      };
    }
  },

  async saveHistory(history: any) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    } catch (error) {
      console.error('Error saving history:', error);
    }
  },

  async getSettings() {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : {
        theme: 'light',
        responseStyle: 'casual',
      };
    } catch (error) {
      console.error('Error getting settings:', error);
      return {
        theme: 'light',
        responseStyle: 'casual',
      };
    }
  },

  async saveSettings(settings: UserSettings) {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  },

  async clearAll() {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.FAVORITES,
        STORAGE_KEYS.HISTORY,
        STORAGE_KEYS.SETTINGS,
      ]);
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  },
};