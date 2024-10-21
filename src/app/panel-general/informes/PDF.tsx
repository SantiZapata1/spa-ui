import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
type PDFProps = {
    estadisticas: any;
    };

// Estilos para el PDF
const styles = StyleSheet.create({
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    margin: "5px",
  },
  tableRow: {
    flexDirection: 'row',
    
  },
  tableColHeader: {
    width: '33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#f2f2f2',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableCol: {
    width: '33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    padding: 5,
    textAlign: 'center',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  images: {
    width: "64px",
    height: "64px"
},
});

// Componente para el PDF
const MyDocument = ({ estadisticas }: PDFProps ) => (

    <Document>
    <Page size="A4">
        {/* Agrega una imagen del logo del SPA en public */}
        <View style={
          {display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          }
        }>
        <Image src="/logo_sin_fondo.png" style={styles.images} />
        </View>

        <Text style={styles.header}>Informe SPA - Sentirse Bien</Text>
      <View style={styles.table}>
        {/* Cabecera */}
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Nombre</Text>
          <Text style={styles.tableColHeader}>Cantidad</Text>
          <Text style={styles.tableColHeader}>Precio</Text>
        </View>

        {/* Filas de estadísticas */}
        {Object.values(estadisticas).map((estadistica: any) => (
          estadistica.nombre !== 'Total' && (
            <View style={styles.tableRow} key={estadistica.nombre}>
              <Text style={styles.tableCol}>{estadistica?.nombre}</Text>
              <Text style={styles.tableCol}>{estadistica?.cantidad}</Text>
              <Text style={styles.tableCol}>${estadistica?.precio}</Text>
            </View>
          )
        ))}

        {/* Fila para el total */}
        {Object.values(estadisticas)
          .filter((estadistica: any) => estadistica.nombre === 'Total')
          .map(({ nombre, cantidad, precio }: any) => (
            <View style={styles.tableRow} key={nombre}>
              <Text style={styles.tableCol}>{nombre}</Text>
              <Text style={styles.tableCol}>{cantidad}</Text>
              <Text style={styles.tableCol}>${precio}</Text>
            </View>
          ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
