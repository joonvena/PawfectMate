import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Text, StyleSheet, Image} from 'react-native';

const Details: React.FC = props => {
  console.log(props.route.params);
  return (
    <View style={styles.root}>
      <View style={{flex: 1, borderBottomColor: '#CCC', borderBottomWidth: 2}}>
        <Image
          resizeMode="cover"
          source={props.route.params.imgurl}
          style={{width: undefined, height: undefined, flex: 1}}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginHorizontal: 15,
        }}>
        <View
          style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 36,
              color: '#8c7b75',
              flex: 1,
            }}>
            {props.route.params.name}
          </Text>
          <Icon name="favorite-border" size={36} color="red" />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="location-on"
            size={13}
            color="#efdcd5"
            style={{marginRight: 3}}
          />
          <Text>{props.route.params.location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFF',
    flex: 1,
  },
});

export default Details;
