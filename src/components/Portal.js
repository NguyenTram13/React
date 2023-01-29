import React, { useEffect } from "react";
import PropType from "prop-types";
import { createPortal } from "react-dom";
function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}
const portalWrapper = createPortalWrapper();
const Portal = ({
  containerClassName = "",
  bodyClassName = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  overlay = true,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapper);
  }, []);
  const renderContent = (
    <div className={containerClassName} style={containerStyle}>
      {overlay && (
        <div
          className="absolute inset-0 bg-black overlay bg-opacity-20"
          onClick={onClose}
        ></div>
      )}
      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapper);
};
Portal.propType = {
  containerClassName: PropType.string,
  bodyClassName: PropType.string,
  onClose: PropType.func,
  containerStyle: PropType.object,
  bodyStyle: PropType.object,
  visible: PropType.bool.isRequired,
  children: PropType.node,
  overlay: PropType.bool,
};
export default Portal;
