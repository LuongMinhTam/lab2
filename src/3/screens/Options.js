import React from "react";
import { StyleSheet, View } from "react-native";
import DetailListItem from "../../components/DetailListItem";

const Options = () => {
    return (
        <View style={styles.container}>
            <DetailListItem title={'Update Profile'}/>
            <DetailListItem title={'Update Language'}/>
            <DetailListItem title={'Sign Out'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})

export default Options;