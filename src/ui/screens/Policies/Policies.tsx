import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { stackParamList } from 'App';
import React from 'react'
import { Text, ScrollView } from 'react-native';
import { } from 'react-native-gesture-handler';
import ScreenContainer from "src/ui/components/layout/ScreenContainer";

type Props = NativeStackScreenProps<stackParamList, 'Policies'>


export default function Policies({ navigation }: Props) {
    return (
        <ScreenContainer>
            <ScrollView>

                <Text style={{ color: 'white', textAlign: 'justify' }}>
                    Espinosa Lopez Leonardo Yahel, con  domicilio en Calle Cedro sur I Manzana 66 Lote 6, segundo piso Col. Patria Nueva C.P. 29045 Chiapas Tuxtla Gutiérrez. Hace de su conocimiento que los datos personales de usted, que actualmente o en el futuro obren en nuestra base de datos, ya sea por formar parte de nuestro grupo de clientes o ser alguno de nuestros proveedores, serán tratados y/o utilizados por: Espinosa Lopez Leonardo Yahel, con el propósito de cumplir aquellas obligaciones que se derivan de la relación jurídica existente entre usted como titular de los datos personales y las empresa antes señalada.
                    Espinosa Lopez Leonardo Yahel en los  casos de excepción  previsto en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión  de Particulares y en los artículos 18 fracción V, 21,22,23 y 24 de la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita, podrá transferir sus datos personales, toda vez que los productos que Espinosa Lopez Leonardo Yahel comercializa son  considerados por esta Ley,  como actividades vulnerables y por tanto sujetas a dicha normatividad.
                    Los datos que almacenamos en nuestra base de datos serán tratados de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, y la información está garantizada y protegida por medidas de seguridad administrativas, técnicas y físicas, para evitar su daño, pérdida, alteración, destrucción, uso, acceso o divulgación indebida. Para conocer dichos procedimientos se puede poner en  contacto con nosotros diegoalbertopj@gmail.com y 9612428401.

                    Su información será utilizada para proporcionarle un  mejor servicio y, en particular por las siguientes razones:
                    Mantenimiento de registros internos y  alta de clientes.
                    Gestionar su cuenta: gestionar su registro como usuario del servicio. los datos personales que usted proporciona pueden darle acceso a diferentes funcionalidades del servicio que están disponibles para usted como usuario registrado.
                    Atender quejas y aclaraciones, y en su caso, tratarlos para fines compatibles con los mencionados en este Aviso de Privacidad y que se consideren análogos para efectos legales. Sus datos serán utilizados para el cumplimiento de las obligaciones derivadas de esa relación jurídica.
                    Para otros propósitos: podemos usar su información para otros propósitos, como análisis de datos, identificación de tendencias de uso, determinación de la efectividad de nuestras campañas promocionales y para evaluar y mejorar nuestro servicio, productos, servicios, marketing y su experiencia.


                    Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales : Nombre Completo, empresa en la que labora, cargo que ocupa, correo electrónico, números telefónicos, Registro Federal de Contribuyentes, Domicilio fiscal y personal,  para procesar su solicitud de crédito  o financiamiento se le puede pedir referencias personales y comerciales.
                    No divulgaremos su información personal a terceros para sus propios propósitos de marketing.

                    Por otra parte, hacemos de su conocimiento que en cualquier momento podrá ejercer los derechos de acceso, rectificación, cancelación u oposición al tratamiento de sus Datos, presentando su solicitud a través del correo electrónico: diegoalbertopj@gmail.com debiendo recabar el acuse de recibo correspondiente. Todas las solicitudes que sean presentadas a Espinosa Lopez Leonardo Yahel, independiente del medio utilizado por los titulares, deberán:
                    Incluir el nombre y firma autógrafa del titular, así como un domicilio u otro medio para comunicarle la respuesta a su solicitud.
                    Acompañar los documentos oficiales que acrediten la identidad de titular.
                    Incluir una descripción clara y precisa de los datos personales respecto de los cuales ejercitará los derechos que les confiere la Ley.
                    Incluir cualquier elemento o documento que facilite la localización de los datos personales de que se traten.
                    Se entenderá que usted como titular consiente tácitamente el tratamiento de sus datos personales conforme a lo enunciado en el presente aviso de privacidad, cuando habiéndolo puesto a su disposición, no manifieste su oposición.
                    Espinosa Lopez Leonardo Yahel se reserva el derecho de cambiar, modificar, complementar y/o alterar el presente Aviso, en cualquier momento, en cuyo caso se hará de su conocimiento a través de cualquiera de los medios que establece la legislación en la materia.
                </Text>
            </ScrollView>
        </ScreenContainer>
    )
}
