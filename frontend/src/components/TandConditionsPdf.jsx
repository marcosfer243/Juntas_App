import React from 'react'

//React PDF
import { Document, Page, Text, View,  StyleSheet, Link } from "@react-pdf/renderer";

function TandConditionsPdf() {
  return (
  <Document>

    <Page style={styles.body} >
        <View>
        <Text style={styles.title} >Terminos y Condiciones</Text>
        <Text style={styles.subTitle} >Previo a la creación del perfil debes aceptar los terminos y condiciones.</Text>
        <Text style={styles.text}>Bienvenido(a) a “Juntas” una aplicación de viajes especialmente realizada para mujeres. Al utilizar nuestros servicios, usted acepta los siguientes términos y condiciones.</Text>
        <Text style={styles.text} ><Text style={styles.negrita} >1. Registro de usuarios: </Text>
         Para poder utilizar nuestra aplicación, es necesario que se registre proporcionando sus datos personales, incluyendo su nombre, correo electrónico y documentos personales. Estos datos serán resguardados y protegidos bajo nuestra política de privacidad, y solo serán visibles para entidades gubernamentales en caso de ser requeridos por la ley.
        </Text>
        <Text style={styles.text} ><Text style={styles.negrita} >2. Uso de la Aplicación: </Text>
         Nuestra aplicación está diseñada para ser utilizada exclusivamente por mujeres. Al utilizar nuestra aplicación, usted se compromete a respetar las condiciones de uso y a no utilizarla para fines ilegales o inapropiados.
        </Text>
        <Text style={styles.text} ><Text style={styles.negrita} >3. Responsabilidad del Usuario: </Text>
         El usuario es responsable de la veracidad de los datos proporcionados durante el registro. Asimismo, es responsable de mantener actualizados sus datos personales en la aplicación.
        </Text>
        <Text style={styles.text} ><Text style={styles.negrita} >4. Cancelación de servicios: </Text>
         Nos reservamos el derecho de cancelar el servicio a cualquier usuario que incumpla con estos términos y condiciones, sin previo aviso.</Text>
         <Text style={styles.text} ><Text style={styles.negrita} >5. Modificaciones de los Terminos y Condiciones: </Text>
         Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento y sin previo aviso. Es responsabilidad del usuario estar al tanto de los cambios realizados.
        </Text>
        <Text style={styles.text}>Al utilizar nuestros servicios, usted acepta estos términos y condiciones en su totalidad.</Text>
        <Text style={styles.text}>Si no está de acuerdo con alguno de los términos o condiciones establecidos, le pedimos que no utilice nuestra aplicación. Gracias por utilizar nuestra aplicación de viajes “Juntas”, esperamos que la disfrutes.
        </Text>
        <Text style={styles.disclaimerTitle} >Descargo de Responsabilidad - Disclaimer</Text>
        <Text style={styles.text}>Nuestra aplicación de viajes “Juntas” no se hace responsable de los accidentes, lesiones, pérdidas, daños o gastos que puedan ocurrir durante o como resultado del uso de nuestros servicios. El usuario es responsable de su propia seguridad durante el uso de la aplicación y debe tomar las medidas necesarias para garantizar su bienestar.
        Nuestra aplicación no se hace responsable de ninguna forma por cualquier problema que pueda surgir durante el uso de nuestros servicios.
        Al utilizar nuestra aplicación, el usuario reconoce y acepta que está utilizando nuestros servicios bajo su propio riesgo y responsabilidad. Nuestra aplicación no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso de nuestros servicios.</Text>
        <Text style={styles.text}>Gracias por utilizar nuestra aplicación de viajes “Juntas”.</Text>
        <Text style={styles.text}>
        Comentarios a:
        </Text>
        <Link style={{fontSize:"11px"}} src="#">
           app_juntas@gmail.com
        </Link>
      </View>
    </Page>
  </Document>
  )
}


const styles = StyleSheet.create({
  body:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    paddingHorizontal:"50px",
    paddingTop:"35px",
    
  },
  title:{
    fontSize:"20px",
    textAlign:"center",
    alignSelf:"center",
    textDecoration:"underline"
  },
  subTitle:{
    fontSize:"15px",
    color:"#525251",
    marginTop:"10px",
    alignSelf:"center"
  },
  text:{
    fontSize:"11px",
    textAlign:"justify",
    marginTop:"10px"
  },
  negrita:{
    fontSize:"11px",
    fontWeight:"1000"
  },
  disclaimerTitle:{
    fontSize:"12px",
    marginTop:"20px",
    textAlign:"justify",
    textDecoration:"underline"
  }
})

export default TandConditionsPdf