import React, {useEffect, useState} from 'react';
import DogCard from '../components/DogCard';
import DogParkCard from '../components/DogParkCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native-gesture-handler';

interface Props {
  navigation: object;
}

const Home: React.FC<Props> = ({navigation}) => {
  console.log(navigation);
  const [dimensions, setDimensions] = useState(Dimensions.get('screen'));

  return (
    <ScrollView style={styles.root}>
      <View
        style={{
          marginHorizontal: 15,
          height: 40,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#CCC',
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Icon
            name="search"
            size={25}
            color="#efdcd5"
            style={{marginLeft: 5}}
          />
          <TextInput
            placeholder="Search friends..."
            style={{
              height: 40,
              flex: 1,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 5,
          alignItems: 'center',
          marginHorizontal: 15,
          marginBottom: 15,
        }}>
        <Icon
          name="location-on"
          size={30}
          color="#efdcd5"
          style={{marginRight: 5}}
        />
        <Text accessibilityLabel="near_you_title" style={styles.nearyou_header}>
          Near you
        </Text>
        <Text style={{color: '#8c7b75'}}>Show all</Text>
      </View>

      <View style={{marginLeft: 15}}>
        <ScrollView
          alwaysBounceHorizontal={true}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            height: 100,
            marginTop: 10,
            marginBottom: 10,
          }}>
          {dogs.map(dog => {
            console.log(dog.imgurl);
            return (
              <TouchableHighlight
                underlayColor="white"
                key={dog.id}
                onPress={() =>
                  navigation.navigate('Details', {
                    name: dog.name,
                    imgurl: dog.imgurl,
                    location: dog.location,
                  })
                }>
                <View>
                  <DogCard
                    name={dog.name}
                    location={dog.location}
                    imgurl={dog.imgurl}
                  />
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
      <View style={{flex: 1, marginHorizontal: 15, marginTop: 15}}>
        <Text style={styles.nearyou_header}>
          Dog parks in <Text style={{color: '#efdcd5'}}>Helsinki</Text>
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginHorizontal: 15,
          marginBottom: 15,
          justifyContent: 'space-between',
        }}>
        {dogparks.map(park => {
          return (
            <DogParkCard
              key={park.id}
              width={dimensions.width}
              name={park.name}
              address={park.address}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  nearyou_header: {
    fontSize: 26,
    color: '#8c7b75',
    fontWeight: '700',
    flex: 1,
  },
});

const dogs = [
  {
    id: 1,
    name: 'Maisa',
    imgurl: require('../assets/images/dog_1.jpg'),
    location: 'Helsinki',
  },
  {
    id: 2,
    name: 'Mala',
    imgurl: require('../assets/images/dog_2.jpg'),
    location: 'Kroatia',
  },
  {
    id: 3,
    name: 'Daisy',
    imgurl: require('../assets/images/dog_3.jpg'),
    location: 'Espoo',
  },
  {
    id: 4,
    name: 'Brutus',
    imgurl: require('../assets/images/dog_4.jpg'),
    location: 'Jyväskylä',
  },
];

const dogparks = [
  {
    id: 1,
    name: 'Maunulanpuiston k...',
    address: 'Rajametsäntie 3',
  },
  {
    id: 2,
    name: 'Eläintarhan koirapuisto',
    address: 'Uimastadioninpolku',
  },
  {
    id: 3,
    name: 'Louhenpuiston koirapuisto',
    address: 'Tuusulanväylä,  00610',
  },
  {
    id: 4,
    name: 'Lassilan koira-aitaus',
    address: 'Niitynperäntie 12',
  },
];

export default Home;
