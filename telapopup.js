import React, { useState } from 'react';
import { View, Text, Button, TextInput, Modal, TouchableOpacity } from 'react-native';

const EmojiPopup = ({ isVisible, onClose, onSelectEmoji }) => {
  const [text, setText] = useState('');

  const emojis = ['😡', '🙁', '😐', '🙂', '😄'];

  const handleEmojiSelect = (emoji) => {
    onSelectEmoji(emoji);

  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
          <TextInput
            placeholder="Digite alguma coisa..."
            value={text}
            onChangeText={setText}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
            {emojis.map((emoji, index) => (
              <TouchableOpacity key={index} onPress={() => handleEmojiSelect(emoji)}>
                <Text style={{ fontSize: 24 }}>{emoji}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const PopupTela = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Mostrar Pop-up" onPress={togglePopup} />
      <Text style={{ marginTop: 20 }}>{selectedEmoji}</Text>
      <EmojiPopup
        isVisible={popupVisible}
        onClose={togglePopup}
        onSelectEmoji={handleEmojiSelect}
      />
    </View>
  );
};

export default PopupTela;