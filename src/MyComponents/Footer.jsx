import React from 'react'

export default function Footer() {
  let footerStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: "#212529",
    color: "white",
    textAlign: "center",
    
  };
  
  return (
    <footer style={footerStyle}>
      <p>Copyright &copy; 2025 | My Todo List</p>
    </footer>
  );
}
