import React from 'react';
import { Text, StyleSheet, View, Pressable, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native-web';

const Tracker = () => {

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>History</Text>
            </View>

            <View style={styles.chart}>
                <Text style={styles.chartHeader}>Bench Press Progress</Text>
                <LineChart
                data={{
                    labels: ['1/1','1/7','1/13','1/19','1/26'],
                    datasets: [
                        {
                            data: [
                                185,
                                195,
                                195,
                                215,
                                205
                            ]
                        }
                    ]
                }}
                width={350}
                height={350}
                yAxisLabel=""
                yAxisSuffix="lbs"
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(255,255,255,${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
                    style: {
                        borderRadius: 10
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezzier
                style={{
                    marginVertical: 8,
                    borderRadius: 10
                }}
                />
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
        fontSize: 40,
        marginHorizontal: 10,
        marginVertical: 18,

        fontFamily: 'Roboto-Black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    chart: {
        // width: 200,
        marginLeft: 12
    },
    chartHeader: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
    }
});



export default Tracker;