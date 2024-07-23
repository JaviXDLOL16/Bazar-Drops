// Graphics.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Text from 'src/ui/components/Texts/Text';
import { Colors } from 'src/ui/models/Colors/Colors';

interface TimeSeriesEntry {
    date: string;
    forecast: number | null;
    quantity: number | null;
}

interface ApiResponse {
    data: {
        time_series: TimeSeriesEntry[];
        trend: string;
    };
    message: string;
    status: string;
    success: boolean;
}
const Graphics = () => {
    const [data, setData] = useState<TimeSeriesEntry[]>([]);
    const [trend, setTrend] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://bazaranddrops.ddns.net/inventoryService/api/cloth/prediction/1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const text = await response.text();
                const cleanedText = text.replace(/NaN/g, 'null');
                const result: ApiResponse = JSON.parse(cleanedText);

                if (result.success) {
                    const processedData = result.data.time_series.map(entry => ({
                        date: entry.date,
                        forecast: entry.forecast,
                        quantity: entry.quantity,
                    }));

                    setData(processedData);
                    setTrend(result.data.trend);
                    setError(null);
                } else {
                    setError('Failed to fetch data');
                }
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An unexpected error occurred');
            }
        };

        fetchData();
    }, []);

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }

    if (data.length === 0) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    const actualSales = data.map(entry => entry.quantity !== null ? entry.quantity : 0);
    const forecastSales = data.map(entry => entry.forecast !== null ? entry.forecast : 0);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Prediccion de ventas de la siguiente semana</Text>
                <LineChart
                    data={{
                        labels: [], // Eliminar etiquetas de fecha
                        datasets: [
                            {
                                data: actualSales,
                                color: (opacity = 1) => `${Colors.Blue}`, // Sales
                                strokeWidth: 2,
                            },
                            {
                                data: forecastSales,
                                color: (opacity = 1) => `${Colors.Green}`, // Forecast
                                strokeWidth: 2,
                            },
                        ],
                        legend: ["Ventas actuales", "Prediccion"]
                    }}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix=""
                    chartConfig={{
                        backgroundColor: Colors.Dark,
                        backgroundGradientFrom: Colors.Dark2,
                        backgroundGradientTo: Colors.Dark2,
                        decimalPlaces: 2,
                        color: (opacity = 1) => Colors.Gray,
                        labelColor: (opacity = 1) => Colors.White,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: '6',
                            strokeWidth: '2',
                            stroke: Colors.Blue2,
                        },
                    }}
                    bezier
                    style={{
                        borderRadius: 16,
                    }}
                    fromZero={true}
                    yAxisInterval={1}
                />
                <Text fontWeight='bold' style={styles.message}>
                    {trend === 'increase' ? 'Se espera que tus ventas incrementen si sigues asi.' : 'Se espera que la media de tus ventas disminuyan :('}
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.White,
        marginBottom: 16,
        textAlign: 'center'
    },
    message: {
        fontSize: 18,
        color: Colors.White,
        marginTop: 20,
        textAlign: 'center'
    },
    error: {
        fontSize: 18,
        color: Colors.Red,
    },
});

export default Graphics;
