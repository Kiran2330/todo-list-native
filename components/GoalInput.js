import { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    TextInput, 
    Button,
    Modal,
    Image 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    
    return (
        <>
        <StatusBar style='light' />
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goals!' 
                    onChangeText={goalInputHandler} 
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#FF7A5A" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#00AB66" />
                    </View>
                </View>
            </View>
        </Modal>
        </>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#00AAA0',
        width: '100%',
        backgroundColor: '#00AAA0',
        color: '#white',
        borderRadius: 6,
        padding: 16,
    }, 
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16, 
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});