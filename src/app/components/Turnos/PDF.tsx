import React, { useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Estilos para el documento
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  logoSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logoBox: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  invoiceNumber: {
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  contactInfo: {
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: '#F4AFAF',
  },
  contactText: {
    marginVertical: 5,
    fontSize: 10,
    lineHeight: 1.5,
  },
  tableHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F4AFAF',
    padding: 5,
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    borderBottom: '1px solid #ddd',
  },
  description: {
    width: '60%',
  },
  quantity: {
    width: '20%',
    textAlign: 'center',
  },
  price: {
    width: '20%',
    textAlign: 'center',
  },
  totalRow: {
    marginTop: 10,
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 12,
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 10,
  },
  images: {
    width: "64px",
    height: "64px"
},
});

type InvoicePDFProps = {
    datos: any;
    cliente: any;
    };

const InvoicePDF = ({datos, cliente}: InvoicePDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sección del logo */}
      <View style={styles.logoSection}>
        <View style={styles.logoBox}>
          <Text></Text>
          <Image src="/logo_sin_fondo.png" style={styles.images} />
          </View>
        <View>
          <Text style={styles.invoiceNumber}>FACTURA Nº {datos._id}</Text>
        </View>
      </View>

      {/* Información de contacto */}
      <View style={styles.contactInfo}>
        <Text style={styles.contactText}>Nombre y Apellido: {datos.cliente}</Text>
        {/* <Text style={styles.contactText}>Dirección: {cliente.correo_electronico}</Text>
        <Text style={styles.contactText}>Teléfono: ______________________________</Text> */}
      </View>

      {/* Tabla de detalles */}
      <View>
        <View style={styles.tableHeader}>
          <Text style={styles.description}>DESCRIPCIÓN</Text>
          <Text style={styles.quantity}>CANTIDAD</Text>
          <Text style={styles.price}>PRECIO</Text>
        </View>

        {/* Filas de la tabla (puedes mapear datos reales aquí) */}
        <View style={styles.tableRow}>
          <Text style={styles.description}>{datos.servicio}</Text>
          <Text style={styles.quantity}>1</Text>
          <Text style={styles.price}>${datos.monto_abonado}</Text>
        </View>
        {/* Total */}
        <Text style={styles.totalRow}>Total: ${datos.monto_abonado}</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text>+54 11 xxxx-xxxx | info@sentirsebien.com.ar</Text>
        <Text>Calle Ficticia 123, Buenos Aires, Argentina</Text>
        <Text>https://spa.sentirse-bien.gonzaloebel.tech/noticias</Text>
      </View>
    </Page>
  </Document>
);

export default InvoicePDF;
