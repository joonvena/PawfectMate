import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';

interface Dog {
  name: string;
  imgurl: ImageSourcePropType;
  location: string;
}

const DogCard: React.FC<Dog> = ({name, imgurl, location}) => {
  return (
    <View style={styles.root}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        imageStyle={{borderRadius: 15}}
        source={imgurl}>
        <View style={styles.info}>
          <Text style={styles.info_name}>{name}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="location-on"
              size={10}
              color="#efdcd5"
              style={{marginRight: 2}}
            />
            <Text style={{color: 'white', fontSize: 10}}>{location}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
    borderRadius: 15,
    marginRight: 15,
    elevation: 5,
  },
  image: {
    width: undefined,
    height: undefined,
    flexDirection: 'row',
    flex: 1,
  },
  info: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(140,123,117,0.4)',
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5,
  },
  info_name: {
    color: 'white',
    fontWeight: 'bold',
    elevation: 1,
  },
});

export default DogCard;
