import React, { useState, useCallback } from 'react'
import { View, StyleSheet, FlatList, Image, useWindowDimensions } from 'react-native'

interface ImagesProps {
    images: string[];
}

const ImageCarousel = ({ images }: ImagesProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const windowWidth = useWindowDimensions().width; 

    const onFlatlistChanged = useCallback(({viewableItems}) => {
        
        if(viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0)
        }
    }, []);

    return (
        <View style={styles.container}>
            <FlatList 
                data={images}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Image 
                        source={{ uri: item}} 
                        style={[styles.images, {width :windowWidth - 40}]}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth - 20}
                snapToAlignment='center'
                decelerationRate='fast'
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50
                }}
                onViewableItemsChanged={onFlatlistChanged}
            />

            <View style={styles.dots}> 
                {images.map((value, index) => (
                    <View style={[styles.dot, {
                        backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'
                    }]} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    
    images: {
        height: 220
    },

    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 2
    },

    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#ededed',
        borderWidth: 1,
        borderColor: '#c9c9c9',
        margin: 5,
        
    }
})


export default ImageCarousel;
