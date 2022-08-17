import React from 'react';
import {  View, Image, Text } from 'react-native';
import { photoCardStyles } from '../assets/Styles';

function PhotoCard({ photo }){

  const BASE_URL = "https://source.unsplash.com/random?cat="
  return (
 <>
 <View style={photoCardStyles.cardContainer}>
<View style={photoCardStyles.cardHeader}>
   {/* avatar */}

   <View style={photoCardStyles.cardHeaderText}>
    <Text>Header Text</Text>
    <Text style={photoCardStyles.cardLocation}>Location</Text>
   </View>

</View>
 </View>

  <Image source={{uri: BASE_URL + 1}} style={photoCardStyles.cardImage}/>
  <Text style={photoCardStyles.cardText}>text</Text>
 </>
  )
}

export default PhotoCard;