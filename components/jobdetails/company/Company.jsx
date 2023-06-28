import React from "react";
import { View, Text } from "react-native";
import { icons } from "../../../constants";
import { checkImageUrl } from "../../../utils";
import styles from "./company.style";

const Company = (companyLogo, jobTitle, companyName, Location) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{ uri: checkImageUrl(companyLogo) ? companyLogo : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" }} style={styles.logoImage} />
      </View>
      <View style={styles.jobTitleBox}>
        <Text styles={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyName}>
        <Text styles={styles.jobTitle}>{companyName} /</Text>
      </View>

      <View style={styles.locationBox}>
        <Image source={icons.location} resizeMode="contain" style={styles.locationImage} />
      </View>
      <Text style={styles.locationName}>{Location}</Text>
    </View>
  );
};

export default Company;
