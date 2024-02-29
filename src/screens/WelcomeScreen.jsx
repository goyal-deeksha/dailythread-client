import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {s} from 'react-native-wind';
import {themeColors} from '../theme/theme';
import {useNavigation} from '@react-navigation/native';
// import NunitoRegular from './assets/fonts/Nunito-Regular.ttf';

export default function WelcomeScreen() {
  const roles = [
    'Front End Developer',
    'Back End Developer',
    'Software Developer',
    'Senior Software Developer',
  ];

  const navigation = useNavigation();

  return (
    <SafeAreaView style={s`mx-8 items-center justify-center flex-1`}>
      <View
        style={{
          ...s`w-full`,
          gap: 40,
        }}>
        <View>
          <Text
            style={{
              ...s`p-5 text-center font-semibold border border-1 rounded-2xl shadow`,
              color: themeColors.bgColor(1),
              fontSize: 30,
              lineHeight: 50,
              fontFamily: 'NunitoRegular',
              borderColor: themeColors.bgColor(0.3),
            }}>
            Hi! CodMiners 🚀 Welcome to you in CodMiners family 👨‍👩‍👧‍👦
          </Text>
        </View>

        <View
          style={{
            ...s`px-5 border rounded-2xl`,
            borderColor: themeColors.bgColor(0.3),
            gap: 20,
            backgroundColor: themeColors.secondaryText(1),
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccount')}>
            <Text
              style={{
                ...s`pb-2 font-semibold text-center`,
                color: '#fff',
                lineHeight: 45,
                fontSize: 24,
                fontFamily: 'NunitoRegular',
              }}>
              Create your Profile 👨‍💻
            </Text>
          </TouchableOpacity>
        </View>

        <View style={s`px-2`}>
          <Text style={{...s`font-semibold text-xl text-center`}}>
            If you have account already.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                ...s`ml-2font-semibold text-2xl text-center`,
                color: themeColors.secondaryText(1),
                fontSize: 20,
                fontWeight: 700,
              }}>
              Login.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
