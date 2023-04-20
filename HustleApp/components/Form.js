import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';
import { Input } from 'native-base';
import DateTimePickerScreen from './DateTimePicker';
const Form = ({ isVisible, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [JobDescription, setJobDescription] = useState('');
  const [pay, setPay] = useState('');
  const [hourly, setHourly] = useState('');
  const [completionTime, setCompletionTime] = useState('');
  const [workers, setWorkers] = useState('');
  const [location, setLocation] = useState('');
  const [startTime, setStartTime] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [date, setDate] = useState(new Date());
  
  const handleSubmit = () => {
    // Do something with the form data here
    console.log('Form submitted!');
    let job = {
        FirstName:firstName,
        LastName:lastName,
        JobTitle:jobTitle,
        JobDescription:JobDescription,
        Images:[],
        Pay:pay,
        Hourly:hourly,
        CompletionTime:completionTime,
        NumberOfWorkers:workers,
        Geolocation:location,
        StartTime:startTime,
        ExtraInfo:extraInfo
    }
    console.log(job)
    onClose(); // Close the form
  }
  
  return (
    <Modal visible={isVisible}>
      <View style={{ flex: 1, justifyContent: 'space-between', padding:20 }}>
        <Text style={{ fontSize: 20 }}>Fill out the form:</Text>
        <Input variant="rounded" placeholder="First Name" value={firstName} onChangeText={text => setFirstName(text)} />
        <Input variant="rounded" placeholder="Last Name" value={lastName} onChangeText={text => setLastName(text)} />
        <Input variant="rounded" placeholder="Job Title" value={jobTitle} onChangeText={text => setJobTitle(text)} />
        <Input variant="rounded" placeholder="Job Description" value={JobDescription} onChangeText={text => setJobDescription(text)} />
        <Input variant="rounded" placeholder="Pay" value={pay} onChangeText={text => setPay(text)} />
        <Input variant="rounded" placeholder="Hourly?" value={hourly} onChangeText={text => setHourly(text)} />
        <Input variant="rounded" placeholder="How long will the job take?" value={completionTime} onChangeText={text => setCompletionTime(text)} />
        <Input variant="rounded" placeholder="How many workers needed?" value={workers} onChangeText={text => setWorkers(text)} />
        <Input variant="rounded" placeholder="Job Location" value={location} onChangeText={text => setLocation(text)} />
        <Input variant="rounded" placeholder="Start Time" value={startTime} onChangeText={text => setStartTime(text)} />
        <Input variant="rounded" placeholder="Extra Info" value={extraInfo} onChangeText={text => setExtraInfo(text)} />
        <DateTimePickerScreen />
        <Button title="Submit" onPress={handleSubmit} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
}

export default Form;