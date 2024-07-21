import React from 'react';
import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import formatDate from '../../../utils/formatDate';

const notesStyles = StyleSheet.create({
    page: {
        padding: "20px",
        fontFamily: "Ubuntu"
    },
    note: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    text: {
        fontSize: "16px"
    },
    footer: {
        fontSize: "12px",
        marginTop: "10px",
        color: "#808080"
    }
});

Font.register({
    family: 'Ubuntu',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
        },
        {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
            fontWeight: 'bold',
        },
        {
            src: 'https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf',
            fontWeight: 'normal',
            fontStyle: 'italic',
        },
    ],
});

const Downloadable = (props) => {

    const { user, notes } = props;

    return (
        <Document title='Your Notes' author={user.name} subject="All your notes in one place!" creator="Note.me" producer="Note.me" language='en'>
            {notes.map((value, index) => (
                <Page key={index} size="A4" style={notesStyles.page}>
                    <View style={notesStyles.note}>
                        <Text style={notesStyles.text}>
                            {value.text}
                        </Text>
                        <Text style={notesStyles.footer}>
                            {formatDate(value.createdAt)}
                        </Text>
                    </View>
                </Page>
            ))}
        </Document>
    );
}

export default Downloadable;
