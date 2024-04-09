import DoncreatiAccount from "./components/DoncreatiAccount";
import SettingsDoncreati from "./components/SettingsDoncreati";

const Settings = () => {
  return (
    <>
      {/* Votre compte Doncreati */}
      <DoncreatiAccount />

      {/* Paramétre Doncreati.PRO */}
      <SettingsDoncreati />
    </>
  );
};

export default Settings;
