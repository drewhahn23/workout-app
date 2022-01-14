import React from 'react';
import { Text, StyleSheet, View, Pressable, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Tracker from './Tracker';
import Workouts from './Workouts';

const Homepage = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View className='HeaderBar' style={styles.header}>
                <Text style={styles.headerText}>Workout Buddy</Text>

            </View>

            <View className='MainpageBody' style={styles.body}>

            <View className='WorkoutPreviewPanel' style={styles.panel1}>
                <Text style={styles.panelText}>Here are your suggested workouts for the week</Text>
                <Text style={styles.dayHeader}>Monday</Text>
                <Text style={styles.dayBody}>Legs</Text>
                <Text style={styles.dayWorkouts}>Deadlifts</Text>
                <Text style={styles.dayWorkouts}>Barbell Front Squat</Text>
                <Text style={styles.dayWorkouts}>Hamstring Curls</Text>
                <Text style={styles.dayWorkouts}>Calf Raises</Text>
                <Text style={styles.dayHeader}>Tuesday</Text>
                <Text style={styles.dayBody}>Chest + Triceps</Text>
                <Text style={styles.dayWorkouts}>Barbell Bench Press</Text>
                <Text style={styles.dayWorkouts}>Overhead Tricep Extensions</Text>
                <Text style={styles.dayWorkouts}>Close grip push-ups</Text>
                <Text style={styles.dayWorkouts}>Dumbell Flies</Text>
                <Pressable 
                onPress={() => 
                navigation.navigate('Workouts', { screen: 'Workouts'})}>
                    <Text style={styles.seeMore}>See More</Text>
                </Pressable>
            </View>

            <View className='ProgressTrackerPanel' style={styles.panel2}>
                <Text style={styles.panelText}>It looks like you don't have any exercises logged yet.</Text>
                <Pressable style={styles.button}
                onPress={() =>
                navigation.navigate('Tracker', { screen: 'Tracker'})}>
                    <Text style={styles.buttonText}>Click here to start tracking your gains!</Text>
                </Pressable>
            </View>

            </View>

            <View className='BottomPanel' style={styles.bottomPanel}>
                {/* Add bottom panel - think of something cool -> maybe text message signup, maybe social aspect?*/}
                <Text style={styles.cryptoHome}>Earn Crypto While You Make Gains</Text>

            </View>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({

    header: {
        backgroundColor: '#FF6F61',
        top: 0,
        // fontSize: 30,
        textAlign: "center",
        zIndex: 20,
        height: 100,

    },

    headerText: {
        flex: 1,
        fontSize: 50,
        marginHorizontal: 10,
        marginVertical: 18,

        fontFamily: 'Roboto-Black',
        fontWeight: 'bold',
    },

    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        height: '72%',
    },

    panel1: {
        flexGrow: 1,
        backgroundColor: '#34568B',
        flex:1,
        padding: 10,
    },
    panel2: {
        backgroundColor: '#34568B',
        flex:1,
        padding: 10,
    },
    button: {
        justifyContent: 'center',
        fontSize: 10,
        padding: 10,

    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },  

    panelText: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10,
    },

    dayHeader: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 18,
        padding: 12,
        paddingLeft: 18,
        paddingTop: 15,

    },

    dayBody: {
        color: 'white',
        marginHorizontal: 5,
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 9,
        
    },

    dayWorkouts: {
        textAlign: 'right',
        fontWeight: 'bold',

    },

    seeMore: {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 13,
        fontSize: 14

    },

    bottomPanel: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#FF6F61',
        height: '100%',


    },

    cryptoHome: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 19,

    },




});

export default Homepage;
