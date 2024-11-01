import React, { useEffect, useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

function InstallPWAButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      // Evitar que el navegador muestre automáticamente el prompt
      e.preventDefault();
      // Guardar el evento para que podamos mostrar el prompt más tarde
      setDeferredPrompt(e);
      setIsInstallable(true); // Mostrar el botón de instalación
    };

    // Escuchar el evento beforeinstallprompt
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Eliminar el event listener cuando el componente se desmonte
    return () => window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // Mostrar el prompt de instalación4
    // @ts-ignore
    deferredPrompt.prompt();
    // Esperar la respuesta del usuario
    // @ts-ignore
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("PWA instalada");
    } else {
      console.log("PWA no instalada");
    }
    // Limpiar el prompt guardado
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return (
    <>
      {isInstallable && (
        <button
        className="bg-sage text-white px-6 py-4 rounded-3xl  transform transition-transform duration-300 ease-in-out hover:scale-105"
        onClick={handleInstallClick}>
          <ArrowDownTrayIcon className="w-6 h-6"/>
        </button>
      )}
    </>
  );
}

export default InstallPWAButton;
