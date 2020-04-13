import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

interface DogPark {
  image?: string;
  name: string;
  address: string;
}

interface Props {
  width: string;
}

const DogParkCard: React.FC<Props & DogPark> = ({width, name, address}) => {
  return (
    <View
      style={{
        height: 150,
        width: width / 2 - 25,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: '#bcaaa4',
      }}>
      <View style={{flex: 1}}>
        <ImageBackground
          resizeMode="cover"
          source={require('../assets/images/park.jpeg')}
          style={styles.image}
          imageStyle={{borderRadius: 15}}>
          <View style={styles.info}>
            <Text style={{marginLeft: 10, fontWeight: '200', fontSize: 13}}>
              {name}
            </Text>
            <Text style={styles.info_address}>{address}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(140,123,117,0.6)',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flex: 1,
  },
  info_address: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 11,
    color: '#DDD',
  },
});

export default DogParkCard;
