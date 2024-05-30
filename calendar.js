import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ],
  dayNames: [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje'
};
LocaleConfig.defaultLocale = 'pt-br';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calendário</Text>
      <Calendar
     
        onDayPress={(day) => setSelectedDate(day.dateString)}
    
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: 'blue'
          }
        }}
   
        theme={{
          selectedDayBackgroundColor: 'blue',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'red',
          arrowColor: 'blue',
        }}
      />
      <Text style={styles.selectedDate}>Data Selecionada: {selectedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  selectedDate: {
    marginTop: 10,
    fontSize: 18,
    color: 'gray',
  },
});

export default CalendarScreen;
