import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next'; // Импорт хука useTranslation

function Type() {
  const { t, i18n } = useTranslation(); // Инициализация хука
  const [typeStrings, setTypeStrings] = useState([]);

  useEffect(() => {
    setTypeStrings([
      t('type_certified_professional'),
      t('type_linux_system_admin'),
      t('type_dreamy_devops'),
      t('type_atlassian_administrator'),
      t('type_computer_system_engineer'),
      t('type_newbie_web_developer')
    ]);
  }, [t, i18n.language]);

  return (
    <Typewriter
      options={{
        strings: typeStrings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
