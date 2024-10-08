import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProfileOptionItem = ({ title, subtitle, icon, onPress, textColor, navIcon, iconBackground }) => {
  return (
    <TouchableOpacity style={styles.optionWrapper} onPress={onPress}>
      {icon && (
        <View style={[styles.iconWrapper, { backgroundColor: iconBackground }]}>
          <Image source={icon} style={styles.icon} />
        </View>
      )}
      <View style={styles.textWrapper}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        {subtitle && <Text style={[styles.subtitle, { color: textColor }]}>{subtitle}</Text>}
      </View>
      {navIcon && (
        <View style={[styles.navIconWrapper, { backgroundColor: iconBackground }]}>
          <Image source={navIcon} style={styles.navIcon} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    padding: 6,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 35,
  },
  icon: {
    width: 26,
    height: 26,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 13,
    marginTop: 3,
  },
  navIconWrapper: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 35,
  },
  navIcon: {
    width: 22,
    height: 22,
  },
});

export default ProfileOptionItem;
