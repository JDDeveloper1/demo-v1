import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Compraventa",
  desc: "Te brindamos un asesoramiento integral en tu Compraventa, con los mejores abogados",
  image: benefitOneImg,
  bullets: [
    {
      title: "Estudio de la documentación",
      desc: "Junto a ti estudiamos la documentación del inmueble",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Revisión y análisis de nota simple",
      desc: "Deja en nustras manos la revision y análisis de nota simple",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Redacción y revisión de documento de reserva",
      desc: "Redactamos la documentacion de reserva y revisamos el docuemnto para birndate lo mejor ",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Alquiler ",
  desc: "Revisamos tus contratos de alquiler de manera remota, todo nuestro servicio a un click ",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Obtén información clave de tu contrato",
      desc: "descubre e informate de los puntos clave de tus contratos",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Detección de errores y cláusulas abusivas",
      desc: "Junto a nuestros abogados revisamos a detalle tu contrato para encontrar errores y clausulas abusivas",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Cumplimiento y adecuación a la nueva ley de vivienda 2023",
      desc: "Estamos informados y formados para darte un asesoria con los ultimos decretos de vivienda < en el 2023",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };
